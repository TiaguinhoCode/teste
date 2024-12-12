// Bibliotecas
import { DateRangePicker, DateValue, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, RangeValue } from "@nextui-org/react"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { GoSync } from "react-icons/go";
import { RiFormatClear } from "react-icons/ri";

// Tipagem
interface ToolBarProps {
    title: string;
    dateRange?: RangeValue<DateValue>;
    handleRefresh?: () => void;
    handleDateRangePicker?: (date: RangeValue<DateValue> | null) => void;
}

export default function ToolBar({ title, dateRange, handleRefresh, handleDateRangePicker }: ToolBarProps) {
    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full items-center justify-center py-4 px-7">
                <div className="flex justify-start w-full items-center text-gray-800">
                    <div className="flex w-full items-center ">
                        <h1 className="font-bold md:text-lg text-sm">{title} </h1>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-end w-auto lg:px-3">
                    <div className="flex w-full items-center px-3">

                        <div className="lg:flex hidden ">
                            {/* <DateRangePicker
                                size="sm"
                                classNames={{
                                    inputWrapper: `lg:flex bg-blue-700 hover:bg-blue-700 text-white focus-within:hover:bg-white-500`,
                                    base: `text-white  ${!dateRange && 'hidden'}`,
                                    innerWrapper: "py-[0.2em] text-white ",
                                    segment: "text-white",
                                    selectorIcon: "text-center text-white",
                                }}
                                value={dateRange}
                                onChange={handleDateRangePicker}
                            /> */}
                            <DateRangePicker className="max-w-xs" label="Stay duration" children={<p>Teste</p>} />;
                        </div>

                    </div>
                    <Dropdown classNames={{ base: "px-2", content: "w-full", trigger: `hover:bg-blue-700 p-1 rounded-md hover:text-white transition duration-300 ease-in-out `, backdrop: "w-10" }}>
                        <DropdownTrigger>
                            <button>
                                <BiDotsHorizontalRounded className="text-3xl" />
                            </button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem
                                key="refresh"
                                startContent={<GoSync className="text-lg" />}
                                className="flex justify-center items-center text-sm font-medium py-2"
                                textValue="atualizar"
                                onClick={handleRefresh}
                                endContent={<span className="md:text-sm text-xs w-full">Atualizar</span>}
                            />
                            <DropdownItem
                                key="filterByCalendar"
                                isReadOnly
                                className={`flex justify-center items-center text-sm font-medium py-2 lg:hidden ${!dateRange && 'hidden'} `}
                                textValue="Filtro de data"
                                children={
                                    <DateRangePicker
                                        aria-label="filtro de data"
                                        size="sm"
                                        classNames={{
                                            inputWrapper: `bg-blue-700 hover:bg-blue-700 text-white focus-within:hover:bg-white-500`,
                                            base: `text-white  ${!dateRange && 'hidden'}`,
                                            innerWrapper: "py-[0.2em] text-white ",
                                            segment: "text-white",
                                            selectorIcon: "text-center text-white",
                                        }}
                                        value={dateRange}
                                        onChange={handleDateRangePicker}
                                    />
                                }
                            />
                            <DropdownItem
                                key="cleanFilter"
                                startContent={<RiFormatClear className="text-lg" />}
                                className="flex justify-center items-center w-full text-sm font-medium py-2"
                                // onClick={handleCleanFilter}
                                textValue="limpa filtro"
                                endContent={<span className="md:text-sm text-xs w-full">Limpa filtro</span>}
                            />
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}