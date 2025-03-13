// Bibliotecas
import { FaCheckCircle } from "react-icons/fa";

// Imagens
import dinheiro from "../../public/dinheiro.png"
import dinheiroDesfocado from "../../public/dinheiroDesfocado.png"

// Next
import Image from "next/image";

export default function Bilings() {
    return (
        <div className="relative w-full z-10 h-auto flex flex-col">
            <div className="absolute inset-0 bg-white"></div>

            <div className="absolute inset-0 flex justify-center py-12">
                <span className="text-9xl font-extrabold text-[#949494] opacity-10">
                    Ganhos
                </span>
            </div>

            <div className="absolute top-[-70px] left-0">
                <Image
                    src={dinheiro}
                    alt="Dinheiro"
                    quality={80}
                    priority={true}
                    className="w-[210px]"
                />
            </div>

            <div className="absolute bottom-[-80px] right-[0px]">
                <Image
                    src={dinheiroDesfocado}
                    alt="Dinheiro"
                    quality={80}
                    priority={true}
                    className="w-[290px]"
                />
            </div>

            <div className="relative w-full z-10 flex flex-col items-center py-24">
                <h2 className="font-extrabold text-5xl pb-20 text-[#C1A5A5]">
                    Faturamento e lucro
                </h2>

                <div className="w-full z-50 flex items-center justify-center py-10">
                    <div className="grid flex w-[60%] grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="flex flex-col items-start">
                            <div className="border rounded-full bg-[#353232] px-4 py-1">
                                <h2 className="text-lg text-white font-bold">PELÍCULA</h2>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="border rounded-full bg-[#353232] px-4 py-1">
                                <h2 className="text-lg text-white font-bold">QUANTIDADE</h2>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="border rounded-full bg-[#353232] px-4 py-1">
                                <h2 className="text-lg text-white font-bold">PREÇO SUGERIDO</h2>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="border rounded-full bg-[#C5C5C5] px-4 py-1">
                                <h2 className="text-lg text-[#C1A5A5] font-bold">FATURAMENTO</h2>
                            </div>
                        </div>

                        {/* Linha 1: TPU Transparente */}
                        <div className="flex items-center justify-start">
                            <FaCheckCircle className="text-green-500 mr-2 text-3xl" />
                            <span className="text-lg text-[#C1A5A5] font-medium">
                                TPU Transparente
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-lg text-[#C1A5A5] font-medium">25</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-lg text-[#C1A5A5] font-medium">R$ 50</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-lg text-[#C1A5A5] font-medium">R$ 1.250</span>
                        </div>

                        {/* Linha 2: TPU Fosca */}
                        <div className="flex items-center justify-start">
                            <FaCheckCircle className="text-green-500 mr-2 text-3xl" />
                            <span className="text-lg text-[#C1A5A5] font-medium">
                                TPU Fosca
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-lg text-[#C1A5A5] font-medium">25</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-lg text-[#C1A5A5] font-medium">R$ 50</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-lg text-[#C1A5A5] font-medium">R$ 1.250</span>
                        </div>

                        {/* Linha 3: EPU Transparente */}
                        <div className="flex items-center justify-start">
                            <FaCheckCircle className="text-green-500 mr-2 text-3xl" />
                            <span className="text-lg text-[#C1A5A5] font-medium">
                                EPU Transparente
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-lg text-[#C1A5A5] font-medium">25</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-lg text-[#C1A5A5] font-medium">R$ 80</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-lg text-[#C1A5A5] font-medium">R$ 2.000</span>
                        </div>

                        {/* Linha 4: EPU Fosca */}
                        <div className="flex items-center justify-start">
                            <FaCheckCircle className="text-green-500 mr-2 text-3xl" />
                            <span className="text-lg text-[#C1A5A5] font-medium">
                                EPU Fosca
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-lg text-[#C1A5A5] font-medium">25</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-lg text-[#C1A5A5] font-medium">R$ 80</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="text-lg text-[#C1A5A5] font-medium">R$ 2.000</span>
                        </div>

                        {/* Linha Total */}
                        <div className="flex items-center justify-center"></div>
                        <div className="flex items-center justify-center"></div>
                        <div className="flex items-center justify-center"></div>
                        <div className="flex items-center justify-center">
                            <div className="border rounded-full bg-[#C5C5C5] px-4 py-1">
                                <span className="text-lg text-[#C1A5A5] font-bold">
                                    Total: R$ 6.500
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bloco custo com insumos */}
                <div className="w-[60%] flex items-center justify-between mt-4">
                    <div className="border rounded-full items-start justify-start bg-[#C5C5C5] uppercase px-4 py-1 text-base text-[#C1A5A5]">
                        custo com insumos: R$ 1.800
                    </div>

                    <div className="border rounded-full items-start justify-start bg-[#00D200] uppercase px-4 py-2 text-2xl text-white font-bold">
                        Lucro obtido: R$ 6.700
                    </div>
                </div>
            </div>
        </div>
    );
}
