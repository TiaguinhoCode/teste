// Next
import { cookies } from "next/headers";
import { Metadata } from "next";

// Biblioteca
import { setupApiClient } from "@/services/api";

// Utils
import { SalesQueries } from "@/utils/queries/sales";
import GetDate from "@/utils/date";
import { GoalsQueries } from "@/utils/queries/goals";
import { ValuesSum } from "@/utils/functions/valuesSum";
import { ConvertStringToNumber, ConvertStringToNumberInAnArray } from "@/utils/processingData/stringToNumberConversion";

// Tipagem
import { TopClientsPlusBuyItems } from "@/types/sales";

// Componentes
import UiSellers from "@/components/layouts/sellers/UiSellers";

type ComissionItems = {
    COMISSAO: string;
    VENDEDOR: string;
}

export const metadata: Metadata = {
    title: "Relatório de vendas e metas",
    description: "Informações sobre vendas",
};

export default async function SellersPage() {
    const cookieStore = cookies();
    const token = (await cookieStore).get('@nextauth.token')?.value;
    const api = setupApiClient(token)

    const user = await api.post('/v1/auth/validate', { token });

    const { today, year, month } = GetDate()
    const { sales, commissionPerSalesPerson } = SalesQueries({ dateInit: `${year}/${month}/01`, dateEnd: today, company: '1, 2, 3, 4, 5', sellersSurname: user.data.returnObject.body.username })
    const { individualGoals } = GoalsQueries({ dateInit: `${year}/${month}/01`, sellersSurname: user.data.returnObject.body.username, company: '1, 2, 3, 4, 5' })
    const { topClientsPlusBuy } = SalesQueries({ dateInit: today, dateEnd: today, company: '1, 2, 3, 4, 5', sellersSurname: user.data.returnObject.body.username })

    const [salesData, goalsData, comissionData, topClientsPlaysBuyData] = await Promise.all([
        api.post("/v1/find-db-query", { query: sales }),
        api.post("/v1/find-db-query", { query: individualGoals }),
        api.post("/v1/find-db-query", { query: commissionPerSalesPerson }),
        api.post("/v1/find-db-query", { query: topClientsPlusBuy })
    ])

    const comissionValue = ValuesSum<ComissionItems>(comissionData.data.returnObject.body, item => item.COMISSAO)

    const goalProgression = [
        {
            name: "Vendas",
            value: salesData.data.returnObject.body[0].VALOR_LIQUIDO ? ConvertStringToNumber(salesData.data.returnObject.body[0].VALOR_LIQUIDO) : 0
        },
        {
            name: "Metas",
            value: goalsData.data.returnObject.body[0].VALOR_INDIVIDUAL_MTI ? ConvertStringToNumber(goalsData.data.returnObject.body[0].VALOR_INDIVIDUAL_MTI) : 0
        }
    ]

    const topClients = ConvertStringToNumberInAnArray<TopClientsPlusBuyItems>(topClientsPlaysBuyData.data.returnObject.body, ['VALOR_LIQUIDO'])

    return (
        <UiSellers
            year={year}
            month={month}
            today={today}
            progressionGoalData={goalProgression}
            comissionValue={comissionValue}
            topCustomerData={topClients}
        />
    )
}