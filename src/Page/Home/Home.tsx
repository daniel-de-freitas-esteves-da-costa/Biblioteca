import CardLivros from './../../Components/Card/CardLivros'

import Header from '../../Components/headerP/header'

import NavegationR from './../../Components/NavegacaoRapida/Navegation'

export default function App() {
  return (

    <>
    
      <Header/>

    <main className="max-w-[1200px] w-full mx-auto py-10 px-6 flex-1 box-border">

    {/* História / Reflexão do Dia */}
        <section className="mt-25  bg-gradient-to-br from-[#000] to-[#00008B] p-8 rounded-2xl mb-10 shadow-sm border-l-6 border-[#111184] reflexao">
          <div className="bg-[#000] text-white text-[11px] font-bold uppercase py-1 px-2.5 rounded-full inline-block mb-3 tracking-wider">
            Destaque do Dia
          </div>
          <p className="text-lg leading-7 text-[#87CEEB] italic font-medium mb-3 mt-0">
            "Um bom livro pode levar você para lugares que nunca imaginou conhecer."
          </p>
          <span className="text-[#ADD8E6] text-[13px] font-semibold block">
            — Reflexão diária
          </span>
        </section>  


        <hr />


        <section className="text-center mb-12 boasVindas mt-5">
          <h2 className="text-[32px] font-extrabold text-[#fff] mb-3 tracking-tight">
            Bem-vindo à nossa biblioteca
          </h2>
          <p className="max-w-[700px] mx-auto text-base text-[#64748B] leading-[26px]">
            Estamos construindo um espaço para você explorar e descobrir novos livros. 
            Fique à vontade para navegar pelo nosso catálogo e encontrar sua próxima leitura favorita!
          </p>
        </section>

        
        <NavegationR />

        <section className="mb-12">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-xl font-bold text-[#0F172A] m-0">Livros em destaque</h3>
            <a href="/acervo" className="text-[#2563EB] text-sm font-semibold no-underline hover:underline">
              Ver todos →
            </a>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            <CardLivros
              titulo="Dom Casmurro"
              autor="Machado de Assis"
              categoria="Romance"
             // imagem="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop"
            />
            <CardLivros
              titulo="O Cortiço"
              autor="Aluísio Azevedo"
              categoria="Romance"
            />
            <CardLivros
              titulo="O Pequeno Príncipe"
              autor="Antoine de Saint-Exupéry"
              categoria="Literatura"
            />
          </div>
        </section>
</main>

    </>
  )
}