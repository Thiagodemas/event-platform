import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import RostoImage from '../assets/image-rosto.png';

export function Subscriber() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscriber(event: FormEvent) {
    event?.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email
      }
    });
    navigate('/event/lesson/abertura-curso-completo-de-desenho')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Aprenda as melhores <strong className="text-blue-500">técnicas de desenhos</strong>, do zero, tanto no <strong className="text-blue-500">digital como no papel</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das técnicas mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscriber} className="flex flex-col gap-2 w-full-width">
            <input
              className="bg-gray-900 rounded px-5 h-14 "
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14 "
              type="email"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto gap-8">
        <img src={RostoImage} className="img-responsive max-w-[500px] mt-10" alt="Code Mockup" />
        <div className="max-w-[640px] p-5">
          <strong className="mt-8 text-[2.2rem] leading-tight text-bold text-blue-500">Curso Básico de Desenho para Iniciantes</strong>
          <p className="mt-4 text-2xl text-gray-200 leading-relaxed">
            Tudo o que você precisa saber para dar os seus primeiros passos no universo do desenho
          </p>
        </div>
      </div>
    </div>
  )
}