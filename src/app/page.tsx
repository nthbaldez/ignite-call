import Image from 'next/image'
import previewImage from '../assets/app-preview.png'
import './../../global.css';

export default function Home() {
  return (
    <div className="max-w-[calc(100vw-(100vw-1160px)/2)] ml-auto h-screen flex items-center gap-20">
      <div className="max-w-480 px-10">
        <h1 className="text-6xl md:text-4xl lg:text-5xl xl:text-6xl">Agendamento Descomplicado</h1>
        <p className="text-gray-200 text-xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </p>
      </div>

      <div className="pr-8 overflow-hidden hidden md:block">
        <Image
          src={previewImage}
          height={442}
          width={748}
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </div>
    </div>
  );
}
