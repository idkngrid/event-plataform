import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import  ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps){
    const { slug } = useParams<{ slug: string }>()

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group"> 
            <span className=" block text-gray-300 mb-2">
                {availableDateFormatted}
            </span>

            <div className={classNames('border border-gray-600 rounded p-4 group-hover:border-green-500', {
                'bg-green-500': isActiveLesson,
            })}>
                <header className="flex justify-between items-center mb-4">
                    {isLessonAvailable ? (
                        <span className={classNames('flex items-center gap-2 text-sm text-blue-500 font-medium', {
                            'text-white': isActiveLesson
                        })}>
                        <CheckCircle size={20} />
                        Conteúdo liberado
                        </span>
                    ) : (
                        <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                        <Lock size={20} />
                        Em breve
                        </span>
                    )}
                    <span className={classNames('text-xs font-bold py-[0.125rem] px-2 border border-green-300 rounded', {
                        'border-white': isActiveLesson
                    })}>
                        {props.type === "live" ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={classNames('text-gray-200', {
                    'text-white': isActiveLesson
                })}>{props.title}</strong>
            </div>
        </Link>
    )
}