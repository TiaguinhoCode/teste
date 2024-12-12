// Utils
import GetDate from "@/utils/date";
import { SalesQueries } from "@/utils/queries/sales";
import { GoalsQueries } from "@/utils/queries/goals";
import { fetchData } from "../../fetchData";
import {
  ConvertStringToNumber,
  ConvertStringToNumberInAnArray,
} from "@/utils/processingData/stringToNumberConversion";

// Biblioteca
import { toast } from "react-toastify";

// Tipagem
type ComissionItems = {
  COMISSAO: string;
  VENDEDOR: string;
};

import { TopClientsPlusBuyItems } from "@/types/sales";
import { ValuesSum } from "@/utils/functions/valuesSum";
interface FetchSalesProps {
  token: string;
  dateInit: string;
  dateEnd: string;
  year?: number | false;
  month?: number | false;
  sellerSurname?: string;
  idSeller?: string;
  company?: string | false;
  setLoading: (value: boolean) => void;
  setCommissionAmount?: (value: number) => void;
  setTopCustomers: (value: TopClientsPlusBuyItems[]) => void;
  setGoalProgression: (value: { name: string; value: number }[]) => void;
  // setSellers?: (value: SellersType[]) => void;
  // setSellersAndGoals?: (value: profitsFromSale[]) => void;
  // setProgressSalesRelatory?: (value: salesProgressData[]) => void;
}

export async function fetchSales({
  token,
  dateInit,
  dateEnd,
  year,
  month,
  sellerSurname,
  idSeller,
  company,
  setTopCustomers,
  setCommissionAmount,
  setLoading,
}: FetchSalesProps) {
  setLoading(true);

  const { today } = GetDate();

  const { sales, commissionPerSalesPerson } = SalesQueries({
    dateInit,
    dateEnd,
    company: "1, 2, 3, 4, 5",
    sellersSurname: sellerSurname,
  });
  const { individualGoals } = GoalsQueries({
    dateInit,
    sellersSurname: sellerSurname,
    company: "1, 2, 3, 4, 5",
  });
  const { topClientsPlusBuy } = SalesQueries({
    dateInit: today,
    dateEnd: today,
    company: "1, 2, 3, 4, 5",
    sellersSurname: sellerSurname,
  });

  let salesData: any[] = [];
  let goalsData: any[] = [];
  let comissionData: any[] = [];
  let topClientsPluysBuyData: any[] = [];

  const queries = [
    fetchData({
      ctx: token,
      query: sales,
      setData: (data) => (salesData = data),
    }),
    fetchData({
      ctx: token,
      query: commissionPerSalesPerson,
      setData: (data) => (comissionData = data),
    }),
    fetchData({
      ctx: token,
      query: individualGoals,
      setData: (data) => (goalsData = data),
    }),
    fetchData({
      ctx: token,
      query: topClientsPlusBuy,
      setData: (data) => (topClientsPluysBuyData = data),
    }),
  ];

  await Promise.all(queries);

  const goalProgression = [
    {
      name: "Vendas",
      value: salesData ? ConvertStringToNumber(salesData[0].VALOR_LIQUIDO) : 0,
    },
    {
      name: "Metas",
      value: goalsData
        ? ConvertStringToNumber(goalsData[0].VALOR_INDIVIDUAL_MTI)
        : 0,
    },
  ];

  if (goalProgression[1].value === 0) {
    toast.error("Não possui metas para esse mês 😞");
  }

  const comissionValue = ValuesSum<ComissionItems>(
    comissionData,
    (item) => item.COMISSAO
  );
  const topCustomers = ConvertStringToNumberInAnArray<TopClientsPlusBuyItems>(
    topClientsPluysBuyData,
    ["VALOR_LIQUIDO"]
  );

  setCommissionAmount && setCommissionAmount(comissionValue);
  setTopCustomers(topCustomers);
  setLoading(false);
}
