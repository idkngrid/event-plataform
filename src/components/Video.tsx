import { DefaultUi, Player, Youtube } from "@vime/react";
import { gql, useQuery } from "@apollo/client";
import { DiscordLogo, Lightning, FileArrowDown, CaretRight, ImageSquare } from "phosphor-react";

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug,
        }
    })

    if (!data || !data.lesson) {
        return (
            <div className="flex-1">
                <p>Carregando...</p>
            </div>
        )
    }

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-4">
                            {data.lesson.title}
                        </h1>
                        <p className="text-gray-200 leading-relaxed mb-6">
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mb-20">
                                <img    
                                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                                    src={data.lesson.teacher.avatarURL}
                                    alt="" 
                                />

                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                    <span className="text-sm text-gray-200 block">{data.lesson.teacher.bio}</span>
                                </div>
                            </div>
                        )}
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