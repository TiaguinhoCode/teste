import Image from "next/image";
import { motion } from "framer-motion";
import hero from "../../public/hero.png";

const SpecItem = ({ text, delay = 0 }: { text: string; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
        className="flex items-center space-x-4"
    >
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay }}
            className="flex items-center space-x-2"
        >

            <div className="bg-red-500 w-6 h-6 rounded-full flex-shrink-0"></div>
            <span className="text-white text-2xl font-light w-full max-w-xs">{text}</span>
        </motion.div>
    </motion.div>
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
                    {/* Animação para a imagem principal */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, y: [0, -20, 0] }}
                        transition={{
                            x: { duration: 0.8, ease: "easeOut" },
                            opacity: { duration: 0.8 },
                            y: {
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            },
                        }}
                        className="relative py-4 w-full lg:max-w-[900px] mx-auto" // Ensures the container is responsive
                    >
                        <Image src={hero} alt="Hero Image" className="w-full h-auto" />
                    </motion.div>

                    {/* Itens de especificação para telas médias e maiores (lado esquerdo) */}
                    <div className="hidden w-full md:flex absolute left-0 top-1/3 transform -translate-x-1/4 -translate-y-1/2 flex-col space-y-5">
                        {specs.map((spec, index) => (
                            <SpecItem key={`left-${index}`} text={spec} delay={index * 0.2} />
                        ))}
                    </div>

                    {/* Itens de especificação para telas médias e maiores (lado direito) */}
                    <div className="hidden w-full md:flex absolute right-0 top-1/2 transform -translate-y-1/2 flex-col space-y-5 translate-x-1/2 md:translate-x-[150%] lg:translate-x-[100%]">
                        {specs.map((spec, index) => (
                            <SpecItem key={`right-${index}`} text={spec} delay={index * 0.2} />
                        ))}
                    </div>

                    {/* Para dispositivos mobile */}
                    <div className="md:hidden mt-8 flex flex-col space-y-4 items-center">
                        {specs.map((spec, index) => (
                            <SpecItem key={`mobile-${index}`} text={spec} delay={index * 0.2} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
