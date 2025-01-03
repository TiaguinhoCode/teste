'use client'

// Componentes
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/buttom"

// React
import { SyntheticEvent, useContext, useState } from "react"
import { AuthContext } from "@/contexts/auth"

// Bibliotecas
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"
import { toast } from "react-toastify"

export default function SigInPage() {
    const [name, seName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [error, setError] = useState<boolean>()

    const { signIn } = useContext(AuthContext)

    async function handleSignIn(e: SyntheticEvent) {
        e.preventDefault()

        setLoading(true)

        if (name === '' && password === '') {
            toast.error("Por Favor, insirar seu email e senha.")
            setError(true)
        }

        await signIn({ username: name, password })

        setLoading(false)
    }

    return (
        <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="relative py-3 sm:w-96 mx-auto text-center">
                <h2 className="text-2xl font-bold ">Login</h2>
                <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div className={`h-2 ${loading ? 'bg-green-500' : 'bg-blue-500'} rounded-t-md`}></div>
                    <form onSubmit={handleSignIn} className="px-10 py-8 ">
                        <Input
                            type="text"
                            label="Nome: "
                            labelPlacement="outside"
                            placeholder="exemplo"
                            isClearable
                            value={name}
                            onChange={(e) => seName(e.target.value)}
                            onClear={() => seName('')}
                            isInvalid={error}
                        />
                        <div className="pt-3">
                            <Input
                                type={isVisible ? "text" : "password"}
                                label="Senha: "
                                labelPlacement="outside"
                                placeholder="Digite sua senha"
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)}>
                                        {isVisible ? (
                                            <IoEyeOutline className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <IoEyeOffOutline className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                isInvalid={error}
                            />
                        </div>
                        <div className="pt-3">
                            <Button type="submit" isLoading={loading} color="primary" >Entrar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}