export default function Navegation()
{
    return(
        <section className='mb-12'>
            <h3 className='text-x1 font-bold text-[#64748B] mb-5'>Navegação rápida</h3>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
                <a href="./Estudos" className='bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors'>
                  <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-x1 flex items-center justify-center text-x1 shrink-0">
                    📖
                  </div>
                  (/* Novo atalho para estudos*/)


                  <div>
                    <h4 className='text-base font-bold text-[#1E293B] mb-1 mt-0'>Cantinho de Estudo</h4>

                    <p className='text-[13px] text-[#64748B] m-0'>Pomodoro, tarefas dicks</p>
                  </div>

                </a>


                <a href="/recomendacao" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                  <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                    ★
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Recomendações</h4>
                    <p className="text-[13px] text-[#64748B] m-0">Descubra novos livros</p>
                  </div>
                </a>

                <a href="/acervo" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                  <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                    ▣
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Acervo</h4>
                    <p className="text-[13px] text-[#64748B] m-0">Explore nossa coleção</p>
                  </div>
                </a>

                <a href="/Desenvolvedor" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                  <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                    ▸
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Aulas Mobile</h4>
                    <p className="text-[13px] text-[#64748B] m-0">Aprenda desenvolvimento</p>
                  </div>
                </a>

                <a href="/Aula" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                    <div className='bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0'>
                      📺
                    </div>

                    <div>
                      <h4 className='text-base font-bold text-[#1E293B] mb-1 mt-0'>Aulas Online</h4>
                      <p className='text-[13px] text-[#64748B] m-0'>Aprenda no conforto</p>
                    </div>
                </a>


            </div>
        </section>
    )
}