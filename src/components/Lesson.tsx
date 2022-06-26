import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group" >
      <span className="text-[16px] text-gray-300">
        {availableDateFormatted}
      </span>
      <div className={classNames('border border-gray-500 p-4 rounded mt-2 group-hover:border-green-500', {
        'bg-green-500': isActiveLesson,
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames('text-blue-500 text-sm font-medium flex gap-2 items-center', {
              'text-white': isActiveLesson,
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-orange-500 text-sm font-medium flex gap-2 items-center">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={classNames('text-white font-bold rounded px-2 py-[2px] border border-green-300 text-xs', {
            'border-white': isActiveLesson,
          })}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={classNames('text-gray-200 mt-5 block', {
          'text-white': isActiveLesson,
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}