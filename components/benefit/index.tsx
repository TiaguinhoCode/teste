import Image from "next/image";
import cardFino from "../../public/Ultrafino.png";
import antiOleosidade from "../../public/AntiOleosidade.png";
import antiImpacto from "../../public/antiImpacto.png";
import resistenteARisco from "../../public/resistenteARiscos.png";
import sensibilidadeTouch from "../../public/sensibilidadeTouch.png";

export default function Benefit() {
    return (
        <div className="relative w-full min-h-screen flex flex-col">
            <div className="absolute inset-0 bg-black"></div>

            <div className="absolute inset-0 flex justify-center py-10">
                <span className="font-extrabold text-white opacity-10 text-4xl sm:text-6xl md:text-7xl lg:text-9xl">
                    BENEFÍCIOS
                </span>
            </div>

            <div className="relative z-10 flex flex-col items-center py-10 md:py-20 min-h-screen">
                {/* Título principal */}
                <h2 className="font-extrabold text-white text-3xl md:text-4xl lg:text-5xl pb-8 md:pb-16">
                    CONFIRA CADA VANTAGEM
                </h2>

                {/* Descrição */}
                <div className="w-full flex flex-col items-center justify-center pb-8 md:pb-20 px-4">
                    <p className="text-center text-base md:text-xl">
                        Nossos testes em laboratório e comprovados por nossos usuários mostraram{" "}
                        <span className="font-bold">alta</span>
                    </p>
                    <p className="text-center text-base md:text-xl">
                        <span className="font-bold">eficiência</span> em seis pontos principais além dos vários outros aspectos de melhora
                    </p>
                    <p className="text-center text-base md:text-xl">
                        no corpo no dia a dia. São eles:
                    </p>
                </div>

                {/* Grid dos benefícios */}
                <div className="grid grid-cols-1 w-[80%] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center items-center px-10">
                    {/* Cartão 1 */}
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-2 text-center text-lg md:text-xl">Ultra fino</h2>
                        <Image
                            className="w-[200px] md:w-[228px] h-auto rounded-sm"
                            src={cardFino}
                            alt="Ultra fino"
                            quality={80}
                            priority={true} 
                        />
                    </div>

                    {/* Cartão 2 */}
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-2 text-center text-lg md:text-xl">
                            Anti <span>Oleosidade</span>
                        </h2>
                        <Image
                            className="w-[200px] md:w-[228px] h-auto rounded-sm"
                            src={antiOleosidade}
                            alt="Anti Oleosidade"
                            quality={80}
                            priority={true}
                        />
                    </div>

                    {/* Cartão 3 */}
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-2 text-center text-lg md:text-xl">Anti-Impacto</h2>
                        <Image
                            className="w-[200px] md:w-[228px] h-auto rounded-sm"
                            src={antiImpacto}
                            alt="Anti Impacto"
                            quality={80}
                            priority={true}
                        />
                    </div>

                    {/* Cartão 4 */}
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-2 text-center text-lg md:text-xl">
                            Resistente a <span>riscos</span>
                        </h2>
                        <Image
                            className="w-[200px] md:w-[228px] h-auto rounded-sm"
                            src={resistenteARisco}
                            alt="Resistente a Riscos"
                            quality={80}
                            priority={true}
                        />
                    </div>

                    {/* Cartão 5 */}
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-2 text-center text-lg md:text-xl">
                            Sensibilidade <span>Touch Original</span>
                        </h2>
                        <Image
                            className="w-[200px] md:w-[228px] h-auto rounded-sm"
                            src={sensibilidadeTouch}
                            alt="Sensibilidade Touch Original"
                            quality={80}
                            priority={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
