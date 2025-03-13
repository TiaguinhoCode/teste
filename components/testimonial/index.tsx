'use client'

// Biblioteca
import { FaStar } from "react-icons/fa";

// Imagem
import Image from "next/image";
import pepeu from "../../public/peu.jpeg";

// Biblioteca
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

export default function Testimonial() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }} // Começa invisível e deslocado para baixo
            whileInView={{ opacity: 1, y: 0 }} // Anima quando aparece na tela
            transition={{ duration: 0.8, ease: "easeOut" }} // Suaviza a transição
            viewport={{ once: true, amount: 0.3 }} // Só ativa uma vez quando 30% do componente estiver visível
            className="relative w-full h-auto flex flex-col"
        >
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
                    modules={[Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    effect="fade" // Adiciona transição suave entre os slides
                    autoplay={{ delay: 3000, disableOnInteraction: false }} // Faz os slides passarem automaticamente
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-[95%] px-4 sm:px-10"
                >
                    <SwiperSlide>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#202124] p-10 sm:p-8 lg:p-20 rounded-lg shadow-lg flex flex-col h-full justify-between min-h-[200px]"
                        >
                            <div className="flex items-center space-x-4">
                                <Image className="w-20 h-20 rounded-full object-cover" src={pepeu} alt="Foto de usuário" />
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
                        </motion.div>
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
        </motion.div>
    );
}
