export default function TypeOfCovers() {
    return (
        <div className="relative w-full h-[750px] flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#363636]"></div>

            <div className="absolute inset-0 flex justify-center py-16">
                <span className="text-9xl font-extrabold text-white opacity-10">
                    TIPOS
                </span>
            </div>

            <div className="relative z-10 flex flex-col items-center py-24 h-full">
                <h2 className="font-extrabold text-5xl pb-24 text-white">
                    Dois Tipos de película
                </h2>

                <div className="w-full flex flex-col items-center justify-center">
                    <p className="text-xl pb-16">Para melhor atender o seu cliente</p>

                    <div className="flex w-full space-x-10 justify-center items-center">
                        <div className="flex w-[32%] justify-between items-center relative">
                            <div className="relative w-full h-[301px] bg-transparent">

                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    className="border rounded-lg border-gray-500"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        <div className="flex w-[32%] justify-between items-center relative">
                            <div className="relative w-full h-[301px] bg-transparent">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/0-7IHOXkiV8"
                                    className="border rounded-lg border-gray-500"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}