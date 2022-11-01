import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola soy Alex Rodriguez y soy <strong>desarrollador web</strong> en argentina, y ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> en todo tipo de proyecto web
      </h1>

      <h2>
        Te ayuso a crear tu sitio o aplicación web, tener más visibilidad y relevancia en internet,<Link to='/contacto'>Contacta conmigo.</Link>
      </h2>

      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis poryectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <div className='works'>

        </div>
      </section>
    </div>
  )
}

export default Inicio