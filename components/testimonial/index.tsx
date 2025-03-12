'use client'

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import pepeu from "../../public/peu.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

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
                    <h2 className="font-extrabold text-2xl text-center sm:text-3xl md:text-5xl pb-16 text-white">
                        Veja o que quem já comprou tem a dizer
                    </h2>
                </div>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-[95%] px-4 sm:px-10"
                >
                    <SwiperSlide>
                        <div className="bg-[#202124] p-10 sm:p-8 lg:p-20 rounded-lg shadow-lg flex flex-col h-full justify-between min-h-[200px]">
                            <div className="flex items-center space-x-4">
                                <Image
                                    className="w-20 h-20 rounded-full object-cover"
                                    src={pepeu}
                                    alt="Foto de usuário"
                                />
                                <div>
                                    <p className="text-white font-bold text-lg">Peu</p>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-white text-lg">
                                            Local Guide · 10 avaliações · 5 fotos
                                        </span>
                                        <div className="flex space-x-1">
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                        </div>
                                        <p className="text-gray-300 text-sm">5.0</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-white text-xl">
                                "Melhor loja, atendimento impecável. Venham conhecer aqui várias novidades e promoções.”
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[#202124] p-10 sm:p-8 lg:p-20 rounded-lg shadow-lg flex flex-col justify-between h-full min-h-[400px]">
                            <div className="flex items-center space-x-4">
                                <img
                                    className="w-20 h-20 rounded-full object-cover"
                                    src="data:image/jpeg;base64/"
                                    alt="Foto de usuário"
                                />
                                <div>
                                    <p className="text-white font-bold text-lg">Rafa</p>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-white text-lg">
                                            15 avaliações · 7 fotos
                                        </span>

                                        <div className="flex space-x-1">
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                        </div>
                                        <p className="text-gray-300 text-sm">5.0</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-6 text-white text-xl">
                                “Muito boa experiência, variedade de produtos e de muita qualidade, com um belo espaço para andar na loja. Sem falar que o pessoal é muito atencioso.”
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[#202124] p-10 sm:p-8 lg:p-20 rounded-lg shadow-lg flex flex-col justify-between h-full min-h-[400px]">
                            <div className="flex items-center space-x-4">
                                <img
                                    className="w-20 h-20 rounded-full object-cover"
                                    src="data:image/webp;base64,"
                                    alt="Foto de usuário"
                                />
                                <div>
                                    <p className="text-white font-bold text-lg">Carlos Souza</p>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-white text-lg">
                                            8 avaliações · 3 fotos
                                        </span>
                                        <div className="flex space-x-1">
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                        </div>
                                        <p className="text-gray-300 text-sm">5.0</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-6 text-white text-xl">
                                "Melhor loja, atendimento impecável. Venham conhecer aqui várias novidades e promoções.”
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[#202124] p-10 sm:p-8 lg:p-20 rounded-lg shadow-lg flex flex-col justify-between h-full min-h-[400px]">
                            <div className="flex items-center space-x-4">
                                <img
                                    className="w-20 h-20 rounded-full object-cover"
                                    src="data:image/webp;base64,"
                                    alt="Foto de usuário"
                                />
                                <div>
                                    <p className="text-white font-bold text-lg">Fernado Gil</p>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-white text-lg">
                                            10 avaliações · 5 fotos
                                        </span>
                                        <div className="flex space-x-1">
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                        </div>
                                        <p className="text-gray-300 text-sm">5.0</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-6 text-white text-xl">
                                “Muito boa experiência, variedade de produtos e de muita qualidade, com um belo espaço para andar na loja. Sem falar que o pessoal é muito atencioso.”

                            </p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
}
