import { FaStar } from "react-icons/fa";
import pepeu from "../../public/peu.jpeg";
import Image from "next/image";

export default function Testimonial() {
    return (
        <div className="relative w-full h-auto flex flex-col">
            {/* Camada de fundo com degradê */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#656565]"></div>

            <div className="absolute inset-0 flex justify-center py-12">
                <span className="text-9xl font-extrabold text-white opacity-10">FAQ</span>
            </div>

            <div className="relative z-10 flex flex-col items-center py-10 h-full">
                <div className="w-full flex items-center justify-center pt-10">
                    <h2 className="font-extrabold text-2xl text-center sm:text-3xl  md:text-5xl pb-16 text-white">
                        Veja o que quem já comprou tem a dizer
                    </h2>
                </div>

                {/* Cards de Depoimentos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full px-4 sm:px-8">
                    {/* Card 1 */}
                    <div className="bg-[#202124] p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-4">
                            <img
                                className="w-20 h-20 rounded-full object-cover"
                                src="data:image/jpeg;base64,/"
                                alt="Foto de usuário"
                            />
                            <div>
                                <p className="text-white font-bold text-lg">Rafa</p>
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
                                <p className="text-gray-300 text-sm">10 avaliações · 5 fotos</p>
                            </div>
                        </div>
                        <p className="mt-6 text-white text-base">
                            "Excelente produto! Superou todas as expectativas."
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#202124] p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-4">
                            <img
                                className="w-20 h-20 rounded-full object-cover"
                                src="data:image/jpeg;base64,/"
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
                                <p className="text-gray-300 text-sm">15 avaliações · 7 fotos</p>
                            </div>
                        </div>
                        <p className="mt-6 text-white text-base">
                            "Atendimento impecável e qualidade surpreendente!"
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#202124] p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-4">
                            <img
                                className="w-20 h-20 rounded-full object-cover"
                                src="data:image/webp;base64"
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
                                <p className="text-gray-300 text-sm">8 avaliações · 3 fotos</p>
                            </div>
                        </div>
                        <p className="mt-6 text-white text-base">
                            "Produto top, recomendo a todos que buscam inovação."
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#202124] p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-4">
                            <Image
                                className="w-20 h-20 rounded-full object-cover"
                                src={pepeu}
                                alt="Foto de usuário"
                                quality={80}
                                priority={true}
                            />
                            <div>
                                <p className="text-white font-bold text-lg">Pedrinho</p>
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
                                <p className="text-gray-300 text-sm">8 avaliações · 3 fotos</p>
                            </div>
                        </div>
                        <p className="mt-6 text-white text-base">
                            "Produto top, recomendo a todos que buscam inovação."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
