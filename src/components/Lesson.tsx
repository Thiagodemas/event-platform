import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })
  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-[16px] text-gray-300">
        {availableDateFormatted}
      </span>

      <div className="border border-gray-500 p-4 rounded mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-blue-500 text-sm font-medium flex gap-2 items-center">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-orange-500 text-sm font-medium flex gap-2 items-center">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-white font-bold rounded px-2 py-[2px] border border-green-300 text-xs">
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">
          {title}
        </strong>
      </div>
    </Link>
  )
}