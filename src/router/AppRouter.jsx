import React from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'

import {Contact} from '../contact'
// import Servicios from '../components/layout/main/Servicios'
import { Box,Toolbar} from '@mui/material';
import { Footer, Navbar } from '../ui'
import { PortfolioRouter } from '../portfolio'
import {Home} from '../home';
export const AppRouter = () => {
  return (
    <>
        {/* HEADER Y NAVEGACION */}

        <Navbar/>

        {/* CONTENIDO CENTRAL */}

        <Box component="main" sx={{ py: 3, px:1 }}>
        <Toolbar/>
          <Routes>
              <Route path='/' element={<Navigate to='/inicio' replace='false'/>}/>
              <Route path='/inicio' element={<Home/>}/>
              <Route path='/portafolio/*' element={<PortfolioRouter/>}/>
              {/* <Route path='/servicios' element={<Servicios/>}/> */}
              <Route path='/contacto' element={<Contact/>}/>
              <Route path='/*' element={
                <div className='page'>
                  <h1>Error 404</h1>
                </div>
              }/>
          </Routes>
          </Box>
        
        
        {/* FOOTER */}

        <Footer/>
        
    </>
  )
}
