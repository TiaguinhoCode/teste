// Next
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Imagens
import peliculas125 from "../../public/peliculas125.png";
import peliculas375 from "../../public/peliculas375.png";
import peliculas625 from "../../public/peliculas625.png";

// Bibliotecas
import { Button } from "@heroui/button";

export default function Offers() {
  return (
    <div className="relative w-full h-auto z-10 flex flex-col">
      {/* Fundo com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t bg-radial-[at_90%_25%] from-[#C23434]/30 to-[#00000067] to-90%"></div>

      {/* Texto de fundo "OFERTAS" */}
      <div className="absolute inset-0 flex justify-center py-12">
        <span className="font-extrabold text-white opacity-10 text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
          OFERTAS
        </span>
      </div>

      <div className="relative w-full flex flex-col items-center justify-center py-24">
        <h2 className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl mb-12">
          Oportunidade Especial
        </h2>

        {/* Layout em grid para os cards */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-8">
            {/* Card 1 */}
            <motion.div
              className="w-full bg-[#872727] rounded-3xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="py-4 flex flex-col items-center">
                <h2 className="w-full text-center text-xl sm:text-2xl md:text-3xl font-extrabold text-white pb-2">
                  125 PELÍCULAS
                </h2>
                <div className="mt-4 w-full flex items-center justify-center border-y border-white pb-5 px-2">
                  <Image
                    src={peliculas125}
                    alt="Películas 125"
                    className="w-[212px] h-[177px] object-contain"
                  />
                </div>
              </div>
              <div className="px-4 flex flex-col items-center pb-8">
                <p className="text-white text-center text-base sm:text-lg font-bold mb-2">
                  Contém 5 caixas de películas
                </p>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-light text-white">
                    Por apenas
                  </p>
                  <p className="text-xl sm:text-2xl font-light text-white mb-2">
                    R$ <span className="text-3xl sm:text-4xl font-extrabold">1.800</span>
                  </p>
                  <p className="text-base sm:text-lg text-white mb-6">
                    ou 12x de R$ 165,00 no cartão
                  </p>
                  <Button className="bg-[#20BF4A] hover:bg-green-600 text-white py-2 sm:py-3 px-6 sm:px-10 rounded-full">
                    COMPRAR AGORA
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="w-full bg-[#C23434] relative rounded-3xl shadow-lg overflow-visible"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="py-4 flex flex-col items-center">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                  <span className="bg-[#FF8000] uppercase text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg">
                    Mais Comprado
                  </span>
                </div>
                <h2 className="w-full text-center py-3 text-xl sm:text-2xl font-extrabold text-white pb-2">
                  375 PELÍCULAS
                </h2>
                <div className="mt-4 w-full flex items-center justify-center border-y border-white pb-5 px-2">
                  <Image
                    src={peliculas375}
                    alt="Películas 375"
                    className="w-[212px] h-[177px] object-contain"
                  />
                </div>
              </div>
              <div className="px-4 flex flex-col items-center pb-8">
                <p className="text-white text-center text-base sm:text-lg font-bold mb-2">
                  Contém 15 caixas de películas
                </p>
                <div className="border border-transparent px-2 sm:px-4 py-1 rounded-md bg-[#DB8205] text-white text-xs sm:text-sm">
                  20% DE DESCONTO
                </div>
                <div className="text-center">
                  <p className="text-base sm:text-lg font-light text-white">
                    de R$ 5.400,00 por
                  </p>
                  <p className="text-xl sm:text-2xl font-light uppercase text-white mb-2">
                    R$ <span className="text-2xl sm:text-3xl font-extrabold">4.320</span>
                  </p>
                  <p className="text-base sm:text-lg uppercase text-white mb-6">
                    ou 12x de R$ 400,00 no cartão
                  </p>
                  <Button className="bg-[#20BF4A] hover:bg-green-600 text-white py-2 sm:py-3 px-6 sm:px-10 rounded-full">
                    COMPRAR AGORA
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="w-full bg-[#872727] rounded-3xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="py-4 flex flex-col items-center">
                <h2 className="w-full text-center text-xl sm:text-2xl md:text-3xl font-extrabold text-white pb-2">
                  625 PELÍCULAS
                </h2>
                <div className="mt-4 w-full flex items-center justify-center border-y border-white pb-5 px-2">
                  <Image
                    src={peliculas625}
                    alt="Películas 625"
                    className="w-[212px] h-[177px] object-contain"
                  />
                </div>
              </div>
              <div className="px-4 flex flex-col items-center pb-8">
                <p className="text-white text-center text-base sm:text-lg font-bold mb-2">
                  Contém 5 caixas de películas
                </p>
                <div className="border border-transparent px-2 sm:px-4 py-1 rounded-md bg-[#DB8205] text-white text-xs sm:text-sm">
                  20% DE DESCONTO
                </div>
                <div className="text-center">
                  <p className="text-base sm:text-lg font-light text-white">
                    de R$ 9.000,00 por
                  </p>
                  <p className="text-xl sm:text-2xl font-light uppercase text-white mb-2">
                    R$ <span className="text-2xl sm:text-3xl font-extrabold">6.300</span>
                  </p>
                  <p className="text-base sm:text-lg uppercase text-white mb-6">
                    ou 12x de R$ 750,00 no cartão
                  </p>
                  <Button className="bg-[#20BF4A] hover:bg-green-600 text-white py-2 sm:py-3 px-6 sm:px-10 rounded-full">
                    COMPRAR AGORA
                  </Button>
                </div>
              </div>
            </motion.div>
        </div>

        <h2 className="text-xl sm:text-2xl underline font-light cursor-pointer mt-8">
          Quero comprar mais caixas
        </h2>
      </div>
    </div>
  );
}
