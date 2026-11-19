export default function Header()
{
    return(
        <header className="bg-[#0F172A] border-b border-[#1E293B] py-4 px-40 fixed top-0 left-0 right-0 z-[999]">
            <div className="max-w-[1400px] mx-auto flex justify-between items-center flex-wrap gap-4">

                <div>
                <h1 className="text-white text-[26px] font-extrabold m-0 tracking-tight">Biblioteca</h1>
                <p className="text-[#94A3B8] text-sm mt-1 m-0">Seu conhecimento começa aqui.</p>
                </div>

                <div className="flex items-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                    Entrar
                </button>

                <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded border border-slate-700 transition-colors">
                    Cadastrar
                </button>

                <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded border border-slate-700 transition-colors">
                    Chat
                </button>
                </div>

            </div>
            </header>
    )
}