import Image from "next/image";

import gamer from "../../public/gamer.png";
import estudante from "../../public/estudante.png";
import crianca from "../../public/crianca.png";
import empresario from "../../public/empresario.png";

export default function Public() {
    return (
        <div className="relative w-full h-auto min-h-[780px] flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-[#DC3030] to-[#761A1A]"></div>

            <div className="absolute inset-0 flex justify-center py-16">
                <span className="font-extrabold text-[#9F2323] opacity-10 text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
                    QUEM?
                </span>
            </div>

            <div className="relative z-10 flex flex-col items-center py-12 md:py-24 h-full">
                <h2 className="font-extrabold text-white text-3xl md:text-5xl pb-8 md:pb-20">
                    Para quem você pode vender
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-center items-center w-full px-4">
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-4 text-xl text-center">Gamers</h2>
                        <Image
                            className="w-full max-w-[320px] rounded-sm"
                            src={gamer}
                            alt="Gamers"
                            quality={80}
                            priority={true}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-4 text-xl text-center">Estudantes</h2>
                        <Image
                            className="w-full max-w-[320px] rounded-sm"
                            src={estudante}
                            alt="Estudantes"
                            quality={80}
                            priority={true}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-4 text-xl text-center">Crianças</h2>
                        <Image
                            className="w-full max-w-[320px] rounded-sm"
                            src={crianca}
                            alt="Crianças"
                            quality={80}
                            priority={true}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center pb-8">
                        <h2 className="pb-4 text-xl text-center">Empresários</h2>
                        <Image
                            className="w-full max-w-[320px] rounded-sm"
                            src={empresario}
                            alt="Empresários"
                            quality={80}
                            priority={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
