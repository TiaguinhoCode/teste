'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

// Defina as propriedades esperadas pelo componente
interface TiltCardProps {
    title: string;
    imageSrc: string | StaticImageData;
    altText: string;
}

export function TiltCard({ title, imageSrc, altText }: TiltCardProps) {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    // Função para lidar com o movimento do mouse
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const centerX = width / 2;
        const centerY = height / 2;
        const rotateX = ((y - centerY) / centerY) * 10; // Ajuste a sensibilidade conforme necessário
        const rotateY = ((x - centerX) / centerX) * -10; // Ajuste a sensibilidade conforme necessário
        setRotateX(rotateX);
        setRotateY(rotateY);
    };

    // Função para restaurar a rotação ao sair do elemento
    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            className="w-[200px] md:w-[228px] flex h-auto rounded-sm p-4 shadow-lg"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    rotateX: `${rotateX}deg`,
                    rotateY: `${rotateY}deg`,
                    transformStyle: 'preserve-3d',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-full h-full"
            >
                <h2 className="pb-2 text-center text-lg md:text-xl">{title}</h2>
                <Image
                    className="w-full h-auto rounded-sm"
                    src={imageSrc}
                    alt={altText}
                    quality={80}
                    priority={true}
                />
            </motion.div>
        </motion.div>
    );
}
