import { FaStar } from "react-icons/fa";

import pepeu from "../../public/peu.jpeg"
import Image from "next/image";

export default function Testimonial() {
    return (
        <div className="relative w-full h-[480px] flex flex-col">
            {/* Camada de fundo com degradê */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#656565]"></div>

            <div className="absolute inset-0 flex justify-center py-6">
                <span className="text-9xl font-extrabold text-white opacity-10">
                    QUEM USA?
                </span>
            </div>

            <div className="relative z-10 flex flex-col items-center py-16 h-full">
                <h2 className="font-extrabold text-5xl pb-16 text-white">
                    Veja o que quem já comprou tem a dizer
                </h2>

                {/* Cards de Depoimentos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-8">
                    {/* Card 1 */}
                    <div className="bg-[#202124] p-10 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-4">
                            <img
                                className="w-20 h-20 rounded-full object-cover"
                                src="data:image/jpeg;base64,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"
                                alt="Foto de usuário"
                            />
                            <div>
                                <p className="text-white font-bold text-lg">Mike Baguncinha</p>
                                <div className="flex items-center">
                                    <div className="flex space-x-1">
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                    </div>
                                    <span className="ml-2 text-white text-lg">5.0</span>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    10 avaliações · 5 fotos
                                </p>
                            </div>
                        </div>
                        <p className="mt-6 text-white text-base">
                            "Excelente produto! Superou todas as expectativas."
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#202124] p-10 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-4">
                            <img
                                className="w-20 h-20 rounded-full object-cover"
                                src="data:image/jpeg;base64,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"
                                alt="Foto de usuário"
                            />
                            <div>
                                <p className="text-white font-bold text-lg">Fernado Gil</p>
                                <div className="flex items-center">
                                    <div className="flex space-x-1">
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                    </div>
                                    <span className="ml-2 text-white text-lg">5.0</span>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    15 avaliações · 7 fotos
                                </p>
                            </div>
                        </div>
                        <p className="mt-6 text-white text-base">
                            "Atendimento impecável e qualidade surpreendente!"
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#202124] p-10 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-4">
                            <img
                                className="w-20 h-20 rounded-full object-cover"
                                src="data:image/webp;base64,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"
                                alt="Foto de usuário"
                            />
                            <div>
                                <p className="text-white font-bold text-lg">Carlos Souza</p>
                                <div className="flex items-center">
                                    <div className="flex space-x-1">
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                    </div>
                                    <span className="ml-2 text-white text-lg">5.0</span>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    8 avaliações · 3 fotos
                                </p>
                            </div>
                        </div>
                        <p className="mt-6 text-white text-base">
                            "Produto top, recomendo a todos que buscam inovação."
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#202124] p-10 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-4">
                            <Image
                                className="w-20 h-20 rounded-full object-cover"
                                src={pepeu}
                                alt="Foto de usuário"
                                quality={80}
                                priority={true}
                            />
                            <div>
                                <p className="text-white font-bold text-lg">PEPEU LENDA 11</p>
                                <div className="flex items-center">
                                    <div className="flex space-x-1">
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                        <FaStar className="text-yellow-400 text-lg" />
                                    </div>
                                    <span className="ml-2 text-white text-lg">5.0</span>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    8 avaliações · 3 fotos
                                </p>
                            </div>
                        </div>
                        <p className="mt-6 text-white text-base">
                            "Vou te pegar, loirinho! Tu vai ver, vai ser uma"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}