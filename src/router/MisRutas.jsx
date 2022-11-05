import React from 'react'
import {Routes, Route, BrowserRouter,Navigate} from 'react-router-dom'
import Inicio from '../components/layout/main/Inicio'
import Contacto from '../components/layout/main/Contacto'
import Portafolio from '../components/layout/main/Portafolio'
import Servicios from '../components/layout/main/Servicios'
import HeaderNav from '../components/layout/HeaderNav'
import Footer from '../components/layout/Footer'
import { Box,Toolbar} from '@mui/material';
const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* HEADER Y NAVEGACION */}

        <HeaderNav/>

        {/* CONTENIDO CENTRAL */}

        <Box component="main" sx={{ py: 3, px:1 }}>
        <Toolbar/>
          <Routes>
              <Route path='/' element={<Navigate to='/inicio' />}/>
              <Route path='/inicio' element={<Inicio/>}/>
              <Route path='/portafolio' element={<Portafolio/>}/>
              <Route path='/servicios' element={<Servicios/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
              <Route path='/*' element={
                <div className='page'>
                  <h1>Error 404</h1>
                </div>
              }/>
          </Routes>
          </Box>
        
        
        {/* FOOTER */}

        <Footer/>
        
    </BrowserRouter>
  )
}

export default MisRutas