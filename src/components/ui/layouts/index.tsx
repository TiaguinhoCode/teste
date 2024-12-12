'use client'

// React 
import { ReactNode, useEffect, useRef, useState } from "react";

// Dados
import permission from "@/data/permissions/ruleByUser.json"

// Next
import { usePathname } from "next/navigation";

// Componentes
import { SideNav } from "../menu/sideNav";
import { HeaderNav } from "../menu/headerNav";

// Tipagem
import { BrandItems } from "@/types/brands";
type Rules = 'vendedor' | 'diretoria' | 'tecnologia'
type PermissionType = {
    [key in Rules]: {
        router: { name: string; path: string }[];
    }
}

interface LayoutProps {
    children: ReactNode;
    role?: string;
    brands?: BrandItems[];
}

export function Layout({ children, brands, role }: LayoutProps) {
    const [isOpen, setIsopen] = useState<boolean>(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const router = usePathname()

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsopen(false);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsopen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const routes = (role && (permission as PermissionType)[role as Rules]?.router) || []
    const canOpenSettings = (role === 'tecnologia' || role === 'diretoria') && router === '/salesbybrand';

    return (
        <div className="relative bg-[#edf3fb] h-screen flex flex-col w-full overflow-hidden">
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md z-50" />
            )}
            <div ref={menuRef}>
                <SideNav toggleMenuState={isOpen} close={setIsopen} routes={routes} />
            </div>
            <HeaderNav open={setIsopen} toggleMenuState={isOpen} />
            <main className="p-4 overflow-auto xl:ml-80 z-20">
                {children}
            </main>
        </div>
    )
}