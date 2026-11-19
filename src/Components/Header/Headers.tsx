import './header.css'

function Headers()
{
    return(
        <header className="border-b-4 border-black fixed top-0">
            

            <nav className="mx-auto flex max-w-5x1 items-center justify-between px-6 py-4 ">
                <h1 className="text-2x1 font-bold">Bibliotecas Daniel de Freitas Esteves da Costa</h1>
                <div className="flex gap-6">
                    <a href="#" className='font-medium hover:text-blue-600'>Inicio</a>

                    <a href="#" className='font-medium hover:text-blue-600'>Livros</a>

                    <a href="#" className='font-medium hover:text-blue-600'>Autores</a>

                    <a href="/Sobre" className='font-medium hover:text-blue-600'>Sobre</a>
                </div>
            </nav>
        </header>
    )
}

export default Headers;