// Bibliotecas
import { Progress } from "@nextui-org/react";

// Tipagem
interface ProgressBarProps {
    minValue: number;
    maxValue: number
}

export default function ProgressBar({ minValue, maxValue }: ProgressBarProps) {
    return (
        <>
            <div className="w-full flex px-7">
                <Progress
                    size="md"
                    value={minValue}
                    maxValue={maxValue !== 0 ? maxValue : 1}
                    color="primary"
                    showValueLabel={true}
                    className=""
                    aria-label="Progressão das vendas"
                    classNames={{
                        value: "text-sm"
                    }}
                />
            </div>
        </>
    )
}