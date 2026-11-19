// fazer a paginação dos documentos
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sobre from './Sobre.tsx'

import Teste from './Components/Header/Headers.tsx'

import Home from './Page/Home/Home.tsx'

import Aulas from  './Page/Aulas/Aulas.tsx' 

import Desenvolvedor from './Page/Desenvolvedor/Desenvolvedor.tsx'


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />}/>
        <Route path="/teste" element={<Teste />}/>

        <Route path='/Aula' element={<Aulas/>}/>

        <Route path='/Desenvolvedor' element={<Desenvolvedor />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;