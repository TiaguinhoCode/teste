// Componentes
import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/button";

// Bibliotecas
import { FaCheckCircle, FaStar } from "react-icons/fa";

// Imagens
import shield from "../public/shield.png"
import Image from "next/image";
import Testimonial from "@/components/testimonial";
import cardFino from "../public/Ultrafino.png"
import Benefit from "@/components/benefit";
import TypeOfCovers from "@/components/typeOfCovers";
import Public from "@/components/public";
import Bilings from "@/components/billings";

export default function Home() {
  return (
    <main className="w-full flex flex-col">

      <section className="relative flex w-full h-screen">
        <div className="relative w-1/2 flex items-center justify-center">

          <div className="space-y-8">
            <h1 className="text-5xl font-extrabold leading-tight">
              Lucre mais de R$ 6 mil
              <br />
              com a nova película
              <br />
              do mercado
            </h1>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-500 text-4xl" />
                <p className="text-2xl font-bold">
                  Tecnologia pioneira no Brasil
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-500 text-4xl" />
                <p className="text-2xl font-bold">Alta margem de lucro</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-500 text-4xl" />
                <p className="text-2xl font-bold">Fácil aplicação</p>
              </div>
            </div>

            <Button
              color="success"
              className="text-white text-xl w-72 font-bold p-8"
              radius="full"
            >
              COMPRAR AGORA
            </Button>
          </div>
        </div>

        <div className="relative w-1/2 h-full">
          <Image
            src={shield}
            alt="Logo PlayCell"
            quality={80}
            priority={true}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <Testimonial />
      <Benefit />
      <TypeOfCovers />
      <Public />
      <Bilings />

      <div className="relative w-full h-[780px] flex flex-col"></div>
    </main >
  );
}
