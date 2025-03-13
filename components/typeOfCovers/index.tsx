// Biblioteca
import { AnimatePresence, motion } from 'framer-motion';

export default function TypeOfCovers() {
    return (
        <div className="relative w-full h-auto min-h-[750px] flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#363636]"></div>

            <div className="absolute inset-0 flex justify-center py-16">
                <span className="font-extrabold text-white opacity-10 text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
                    TIPOS
                </span>
            </div>

            <div className="relative z-10 flex flex-col items-center py-12 md:py-24 h-full">
                <h2 className="font-extrabold text-white text-3xl md:text-5xl pb-8 md:pb-24">
                    Dois Tipos de película
                </h2>

                <div className="w-full flex flex-col items-center justify-center px-4">
                    <p className="text-center text-base md:text-xl pb-8">
                        Para melhor atender o seu cliente
                    </p>

                    <div className="flex flex-col md:flex-row w-full space-y-8 md:space-y-0 md:space-x-10 justify-center items-center">
                        <AnimatePresence>
                            <motion.div
                                key="video1"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                transition={{ duration: 0.5 }}
                                className="flex w-full md:w-[32%] justify-center items-center relative"
                            >
                                <div className="w-full">
                                    <iframe
                                        className="w-full aspect-video border rounded-lg border-gray-500"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </motion.div>

                            <motion.div
                                key="video2"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                transition={{ duration: 0.5 }}
                                className="flex w-full md:w-[32%] justify-center items-center relative"
                            >
                                <div className="w-full">
                                    <iframe
                                        className="w-full aspect-video border rounded-lg border-gray-500"
                                        src="https://www.youtube.com/embed/0-7IHOXkiV8"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
