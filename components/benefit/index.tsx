import Image from "next/image";
import cardFino from "../../public/Ultrafino.png"
import antiOleosidade from "../../public/AntiOleosidade.png"
import antiImpacto from "../../public/antiImpacto.png"
import resistenteARisco from "../../public/resistenteARiscos.png"
import sensibilidadeTouch from "../../public/sensibilidadeTouch.png"

export default function Benefit() {
    return (
        <div className="relative w-full h-[850px] flex flex-col">
            <div className="absolute inset-0 bg-black "></div>

            <div className="absolute inset-0 flex justify-center py-10">
                <span className="text-9xl font-extrabold text-white opacity-10">
                    BENEFÍCIOS
                </span>
            </div>

            <div className="relative z-10 flex flex-col items-center py-20 h-full">
                <h2 className="font-extrabold text-5xl pb-16 text-white">
                    CONFIRA CADA VANTAGEM
                </h2>

                <div className="w-full flex flex-col items-center justify-center pb-20">
                    <p className="text-xl">Nossos testes em laboratório e comprovados por nossos usuários mostraram <span className="font-bold">alta</span> </p>
                    <p className="text-xl"><span className="font-bold">eficiência</span> em seis pontos principais além dos vários outros aspectos de melhora</p>
                    <p className="text-xl">no corpo no dia a dia. São eles:</p>
                </div>

                <div className="grid grid-cols-1 w-3/4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full justify-center items-center">
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-2 text-xl break-words max-w-full text-center">Ultra fino</h2>
                        <Image
                            className="w-[228px] h-[301px] rounded-sm"
                            src={cardFino}
                            alt="fino"
                            quality={80}
                            priority={true}
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-2 text-xl break-words max-w-36 text-center">Anti <span className="pb-2 text-xl">Oleosidade</span></h2>

                        <Image
                            className="w-[228px] h-[301px] rounded-sm"
                            src={antiOleosidade}
                            alt="antiOleosidade"
                            quality={80}
                            priority={true}
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-2 text-xl break-words max-w-full text-center">Anti-Impacto</h2>
                        <Image
                            className="w-[228px] h-[301px] rounded-sm"
                            src={antiImpacto}
                            alt="fino"
                            quality={80}
                            priority={true}
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-2 text-xl break-words max-w-36 text-center">Resistente a <span className="pb-2 text-xl">riscos</span></h2>
                        <Image
                            className="w-[228px] h-[301px] rounded-sm"
                            src={resistenteARisco}
                            alt="fino"
                            quality={80}
                            priority={true}
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-2 text-xl break-words max-w-36 text-center">Sensibilidade  <span className="pb-2 text-xl">Touch Original</span></h2>
                        <Image
                            className="w-[228px] h-[301px] rounded-sm"
                            src={sensibilidadeTouch}
                            alt="fino"
                            quality={80}
                            priority={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}