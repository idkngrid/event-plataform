import { DiscordLogo, Lightning, FileArrowDown, CaretRight, ImageSquare } from "phosphor-react";

export function Video() {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-4">
                            Aula 01 - Criando o projeto e realizando o setup inicial
                        </h1>
                        <p className="text-gray-200 leading-relaxed mb-6">
                            Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
                        </p>

                        <div className="flex items-center gap-4 mb-20">
                            <img    
                                className="h-16 w-16 rounded-full border-2 border-blue-500"
                                src="https://github.com/diego3g.png" 
                                alt="" 
                            />

                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">Diego Fernandes</strong>
                                <span className="text-sm text-gray-200 block">Co-fundador e CTO na Rocketseat</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-center">
                        <a href="#" className="bg-green-500 flex items-center justify-center gap-2 text-sm font-bold uppercase p-4 rounded hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            COMUNIDADE NO DISCORD
                        </a>
                        <a href="#" className="flex items-center justify-center gap-2 text-sm font-bold uppercase text-blue-500 border border-blue-500 rounded p-4 hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            ACESSE O DESAFIO
                        </a>
                    </div>
                </div>
                <div className="gap-8 grid grid-cols-2">
                    <a href="#" className="bg-gray-700 flex items-stretch gap-6 rounded overflow-hidden hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Material Complementar</strong>
                            <p className="text-sm text-gray-200 mt-2">Acesse o material complementar para acelerar o seu desenvolvimento</p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                    <a href="#" className="bg-gray-700 flex items-stretch gap-6 rounded overflow-hidden hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <ImageSquare size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Wallpapers exclusivos</strong>
                            <p className="text-sm text-gray-200 mt-2">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}