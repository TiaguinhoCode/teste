"use client"

// Componentes
import Container from "@/components/ui/container";
import ToolBar from "@/components/ui/toolbar";
import ProgressBar from "@/components/ui/ProgressBar";
import Card from "@/components/ui/card";
import GraphicContainer from "@/components/ui/sciences/container";
import BarChart from "@/components/ui/sciences/barChart";
import CustomTooltip from "@/components/ui/sciences/toolTip";

// Utils
import { GetMonthName } from "@/utils/mask/date";
import { formatCurrency } from "@/utils/mask/money";
import { fetchSales } from "@/utils/handleRefresh/refresh/sales";

// Biblioteca
import { DateValue, RangeValue } from "@nextui-org/react";
import { parseDate } from '@internationalized/date';
import { FaHotel } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";

// Dados
import vibrantPalette from "@/data/palettes/vibrant/vibrantPalette.json"

// React
import { useContext, useState } from "react";

// Tipagem
import { TopClientsPlusBuyItems } from "@/types/sales";
import { AuthContext } from "@/contexts/auth";
interface UiSellersProps {
    year: number;
    month: number;
    today: string;
    progressionGoalData: { name: string; value: number }[]
    topCustomerData: TopClientsPlusBuyItems[]
    comissionValue: number;
}

const getLastDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
};

export default function UiSellers({ year, month, today, progressionGoalData, topCustomerData, comissionValue }: UiSellersProps) {
    const [date, setDate] = useState<RangeValue<DateValue>>({
        start: parseDate(new Date(`${year}/${month}/01`).toISOString().split('T')[0]),
        end: parseDate(new Date(today).toISOString().split('T')[0]),
    });
    const [goalProgression, setGoalProgression] = useState(progressionGoalData)
    const [commissionAmount, setCommissionAmount] = useState(comissionValue)
    const [topCustomers, setTopCustomers] = useState(topCustomerData)
    const [loading, setLoading] = useState<boolean>(false)

    const lastDay = getLastDayOfMonth(date.start.year, date.end.month)

    const { token, user } = useContext(AuthContext)

    const handleRefresh = async () => {
        await fetchSales({
            dateInit: `${date.start.year}/${date.start.month}/${date.start.day}`,
            dateEnd: `${date.end.year}/${date.end.month}/${date.end.day}`,
            sellerSurname: user,
            token,
            setLoading,
            setCommissionAmount,
            setGoalProgression,
            setTopCustomers
        })
    }

    const handleDateRangePicker = async (newDate: RangeValue<DateValue> | null) => {
        if (newDate) {
            setDate(newDate)
            await fetchSales({
                dateInit: `${newDate.start.year}/${newDate.start.month}/${newDate.start.day}`,
                dateEnd: `${newDate.end.year}/${newDate.end.month}/${newDate.end.day}`,
                sellerSurname: user,
                token,
                setLoading,
                setCommissionAmount,
                setGoalProgression,
                setTopCustomers
            })
        }

    }

    return (
        <>
            <Container>
                <ToolBar title={`Metas de ${GetMonthName(date.start.month)}`} dateRange={date} handleRefresh={handleRefresh} handleDateRangePicker={handleDateRangePicker} />
                <ProgressBar minValue={goalProgression[0].value} maxValue={goalProgression[1].value} />
                <div className="w-full flex flex-col py-3 px-7">
                    <span className="text-xl font-bold text-emerald-500 dark:text-white">{formatCurrency(goalProgression[0].value)}</span>
                    <p className="text-sm text-gray-700 dark:text-white">Acumulados da meta de <span className="font-bold">{formatCurrency(goalProgression[1].value)}</span></p>
                </div>
            </Container>
            <div className="w-full flex">
                <div className="lg:w-1/3">
                    <Card title="Meta" lastDay={lastDay} month={date.start.month} dataInformation={[{ icon: <FaHotel className="text-sm" />, label: `Grupo Play`, highlight: false }, { icon: <MdOutlineAttachMoney className="text-lg" />, label: `Comissão: ${formatCurrency(commissionAmount)}`, highlight: true }]} />
                </div>
                <div className="w-full">
                    <Container>
                        <h2 className="font-bold px-4 py-4">Top Clientes do dia</h2>
                        <GraphicContainer loading={loading}>
                            <BarChart
                                data={topCustomers}
                                dataKey="VALOR_LIQUIDO"
                                dataKeyXAxis="NOME_CLIENTE"
                                displayXAxis={true}
                                displayCartesianGrid={true}
                                palette={vibrantPalette}
                                displayToolTip={true}
                                ToolTipComponent={(props) => (
                                    <CustomTooltip {...props} dataKey='NOME_CLIENTE' />
                                )}
                            />
                        </GraphicContainer>
                    </Container>
                </div>
            </div>
        </>
    )
}   