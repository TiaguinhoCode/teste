import { motion } from 'framer-motion';
import { TiltCard } from "../tileCard";

// Images
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
                {/* Title */}
                <h2 className="font-extrabold text-white text-2xl md:text-4xl lg:text-5xl pb-8 md:pb-16">
                    CONFIRA CADA VANTAGEM
                </h2>

                {/* Description */}
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

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 lg:w-[80%] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center items-center px-10"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2, // Controls delay between cards
                            },
                        },
                    }}
                >
                    <TiltCard title="Ultra fino" imageSrc={cardFino} altText="Ultra fino" />
                    <TiltCard title="Anti Oleosidade" imageSrc={antiOleosidade} altText="Anti Oleosidade" />
                    <TiltCard title="Anti-Impacto" imageSrc={antiImpacto} altText="Anti Impacto" />
                    <TiltCard title="Resistente a riscos" imageSrc={resistenteARisco} altText="Resistente a Riscos" />
                    <TiltCard title="Sensibilidade Touch Original" imageSrc={sensibilidadeTouch} altText="Sensibilidade Touch Original" />
                </motion.div>
            </div>
        </div>
    );
}
