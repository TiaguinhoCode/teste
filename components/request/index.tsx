import Image from "next/image";
import hero from "../../public/hero.png";

// Componente para os itens de especificação
const SpecItem = ({ text }: { text: string }) => (
    <div className="flex items-center space-x-4">
        <div className="bg-red-500 w-6 h-6 rounded-full flex-shrink-0"></div>
        {/* Texto com largura fluida e limite máximo */}
        <span className="text-white text-2xl font-light w-full max-w-xs">{text}</span>
    </div>
);

export default function Request() {
    const specs = [
        "Mesmo material usado em blindagem de carros de luxo",
        "Pode ser cortada em qualquer máquina a partir de 8”",
        "Tecnologia aclamada na Europa",
        "Produto com valor agregado",
    ];

    return (
        <div className="relative w-full h-auto flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#656565]"></div>

            <div className="relative w-full flex items-center justify-center py-24">
                <div className="relative w-full max-w-4xl">
                    <Image src={hero} alt="Hero Image" className="w-full h-auto" />

                    {/* Itens de especificação para telas médias e maiores (lado esquerdo) */}
                    <div className="hidden md:flex absolute left-0 top-1/3 transform -translate-x-1/2 -translate-y-1/2 flex-col space-y-5">
                        {specs.map((spec, index) => (
                            <SpecItem key={`left-${index}`} text={spec} />
                        ))}
                    </div>

                    {/* Itens de especificação para telas médias e maiores (lado direito) */}
                    <div className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 flex-col space-y-5 
            translate-x-1/2 md:translate-x-[150%] lg:translate-x-[120%]">
                        {specs.map((spec, index) => (
                            <SpecItem key={`right-${index}`} text={spec} />
                        ))}
                    </div>

                    {/* Para dispositivos mobile, exibe os itens abaixo da imagem */}
                    <div className="md:hidden mt-8 flex flex-col space-y-4 items-center">
                        {specs.map((spec, index) => (
                            <SpecItem key={`mobile-${index}`} text={spec} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
