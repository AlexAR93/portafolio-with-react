import React from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'
import {Certificates, Portafolio, Proyects, Tecnologies} from '../page';
export const PortfolioRouter = () => {
  return (
    <>
      <Portafolio/>
      <Routes>
        <Route path='/' element={<Navigate to='certificados'/>}/>
          <Route path='/certificados' element={<Certificates/>}/>
          <Route path='/proyectos' element={<Proyects/>}/>
          <Route path='/tecnologias' element={<Tecnologies/>}/>
      </Routes>
    </>

  )
}
