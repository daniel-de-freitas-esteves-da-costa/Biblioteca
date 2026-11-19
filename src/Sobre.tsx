import { useState } from 'react'

import './Components/Sobre/css/Geral.css'


import SobreMim from './Components/Sobre/SobreMim'
import QuemSou from './Components/Sobre/QuemSou'
import Formacao from './Components/Sobre/Formacao'
import Habilidade from './Components/Sobre/Habilidade'
import Projetos from './Components/Sobre/Projetos'
import Contato from './Components/Sobre/Contato'

function Sobre()
{

    const [ pagina, setPagina ] = useState('')

    return (
        <div>
            <h1>Página Sobre mim</h1>

            <hr />

            <div className="Buttons">
                <button onClick={() => setPagina('Sobre')}>Sobre</button>
                

                <button onClick={() => setPagina('Quem sou')}>Quem sou</button>
                

                <button onClick={() => setPagina('Formacao')}>Formação</button>
                

                <button onClick={() => setPagina('Habilidade')}>Habilidade</button>
                

                <button onClick={() => setPagina('Projetos')}>Projetos</button>
                

                <button onClick={() => setPagina('Contatos')}>Contato</button>
                
            </div>

            <hr />

            {
                    pagina == 'Sobre' && <SobreMim />
            }

            {
                    pagina == 'Quem sou' && <QuemSou />
            }

            {
                    pagina == 'Formacao' && <Formacao />
            }

            {
                    pagina == 'Habilidade' && <Habilidade />
            }

            {
                    pagina == 'Projetos' && <Projetos />
            }

            {
                    pagina == 'Contatos' && <Contato />
            }
        </div>
    )
}

export default Sobre;