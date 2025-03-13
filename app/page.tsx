'use client'

// Componentes
import Testimonial from "@/components/testimonial";
import Benefit from "@/components/benefit";
import TypeOfCovers from "@/components/typeOfCovers";
import Public from "@/components/public";
import Bilings from "@/components/billings";
import Offers from "@/components/offers";
import Request from "@/components/request";
import Faq from "@/components/faq";

// Bibliotecas
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@heroui/button";

// Imagens
import shield from "../public/shield.png";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="w-full flex flex-col overflow-x-hidden">
      <section className="relative flex flex-col md:flex-row justify-between w-full h-screen">
        <div className="relative w-full flex items-center justify-center p-4 md:p-8">
          <div className="space-y-8 text-center md:text-left">
            <div className="w-full flex items-center justify-center md:justify-start">
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                Lucre mais de R$ 6 mil
                <br />
                com a nova película
                <br />
                do mercado
              </motion.h1>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaCheckCircle className="text-green-500 text-2xl md:text-4xl" />
                <p className="text-base sm:text-lg md:text-2xl font-light">
                  Tecnologia pioneira no Brasil
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaCheckCircle className="text-green-500 text-2xl md:text-4xl" />
                <p className="text-xl sm:text-2xl md:text-2xl font-light">
                  Alta margem de lucro
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaCheckCircle className="text-green-500 text-2xl md:text-4xl" />
                <p className="text-xl sm:text-2xl md:text-2xl font-light">
                  Fácil aplicação
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <Button
                color="success"
                className="text-white text-lg sm:text-xl md:text-2xl w-48 md:w-72 font-bold p-4 md:p-8"
                radius="full"
              >
                COMPRAR AGORA
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
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
            <Image
              src={shield}
              alt="Logo PlayCell"
              quality={100}
              priority={true}
              layout="intrinsic" // Makes the image responsive based on its intrinsic size
              width={700} // Base width
              height={700} // Base height
              className="w-full h-auto object-contain" // Ensures the image scales while maintaining aspect ratio
            />
          </motion.div>

        </div>
      </section>

      <Testimonial />
      <Benefit />
      <TypeOfCovers />
      <Public />
      <Bilings />
      <Offers />
      <Request />
      <Faq />
    </main>
  );
}
