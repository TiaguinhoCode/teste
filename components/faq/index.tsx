'use client'

// React
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FaqItemProps = {
  question: string;
  explanation: string;
};

const FaqItem = ({ question, explanation }: FaqItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        onClick={() => setOpen(!open)}
        className="bg-[#EB2323] px-5 py-3 w-full shadow-md flex items-center justify-between cursor-pointer transition transform hover:scale-105"
        whileHover={{ scale: 1.02 }}
      >
        <p className="text-2xl font-semibold text-white">{question}</p>
        <div className="text-2xl text-white">
          {open ? '–' : '+'}
        </div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="px-5 py-3 w-full">
              <p className="text-xl text-white">{explanation}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Faq() {
  return (
    <div className="relative w-full h-auto flex flex-col items-center justify-center z-10 py-24">
      {/* Fundo com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#C23434]/30 to-[#00000067]"></div>

      {/* Texto decorativo "FAQ" */}
      <div className="absolute inset-0 flex justify-center py-12">
        <span className="text-5xl sm:text-7xl md:text-9xl font-extrabold text-white opacity-10">
          FAQ
        </span>
      </div>

      {/* Título */}
      <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl z-10 text-white pb-10">
        Perguntas Frequentes
      </h2>

      {/* Descrição */}
      <div className="w-full md:w-1/2 text-center z-10 pb-10 px-4">
        <p className="text-lg sm:text-xl text-white">
          Perguntas e respostas listadas, todas supostamente solicitadas em algum contexto e pertencentes a um tópico específico.
        </p>
      </div>

      {/* Grid dos FAQ Items */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4 z-50">
        <div className="flex flex-col gap-4">
          <FaqItem
            question="A película vai funcionar pra mim?"
            explanation="A película foi testada em diversos materiais e garantimos sua eficácia."
          />
          <FaqItem
            question="Quais são os componentes?"
            explanation="Nossos produtos são feitos com materiais de alta qualidade e tecnologia de ponta."
          />
        </div>
        <div className="flex flex-col gap-4">
          <FaqItem
            question="Há material de apoio pra venda?"
            explanation="Sim, temos vídeos e manuais disponíveis para auxiliar no uso."
          />
          <FaqItem
            question="Qual o prazo de entrega?"
            explanation="O prazo médio de entrega é de 5 a 10 dias úteis."
          />
          <FaqItem
            question="Como devo aplicar a película?"
            explanation="Siga as instruções do manual para uma aplicação correta e sem falhas."
          />
        </div>
      </div>
    </div>
  );
}
