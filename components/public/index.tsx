import Image from "next/image";

import gamer from "../../public/gamer.png"
import estudante from "../../public/estudante.png"
import crianca from "../../public/crianca.png"
import empresario from "../../public/empresario.png"

export default function Public() {
    return (
        <div className="relative w-full h-[780px] flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-[#DC3030] to-[#761A1A]"></div>

            <div className="absolute inset-0 flex justify-center py-16">
                <span className="text-9xl font-extrabold text-[#9F2323] opacity-10">
                    QUEM?
                </span>
            </div>

            <div className="relative z-10 flex flex-col items-center py-24 h-full">
                <h2 className="font-extrabold text-5xl pb-20 text-white">
                    Para quem você pode vender
                </h2>

                <div className="grid flex grid-cols-1 w-3/4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-center items-center">
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-4 text-xl break-words max-w-full text-center">Gamers</h2>
                        <Image
                            className="w-[318px]  rounded-sm"
                            src={gamer}
                            alt="fino"
                            quality={80}
                            priority={true}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-4 text-xl break-words max-w-full text-center">Estudantes</h2>
                        <Image
                            className="w-[298px]  rounded-sm"
                            src={estudante}
                            alt="fino"
                            quality={80}
                            priority={true}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-4 text-xl break-words max-w-full text-center">Crianças</h2>
                        <Image
                            className="w-[298px]  rounded-sm"
                            src={crianca}
                            alt="fino"
                            quality={80}
                            priority={true}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-4 text-xl break-words max-w-full text-center">Empresários</h2>
                        <Image
                            className="w-[318px]  rounded-sm"
                            src={empresario}
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