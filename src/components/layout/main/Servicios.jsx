import React from 'react'
import './services.css'
const Servicios = () => {
  return (
    <section className='page' data-aos="zoom-in">
      <h1 className='heading'>Servicios</h1>

      <section className='services'>
        <article className='service'>
          <h2>Diseño Web</h2>
          <p>Hago que tu web se vea bonita</p>
        </article>

        <article className='service'>
          <h2>Desarrollo Web</h2>
          <p>Creo tu página web desde cero</p>
        </article>

        <article className='service'>
          <h2>Posicionamiento Web</h2>
          <p>Hago que tu web aparezca en Google y la vea la gente</p>
        </article>
      </section>
    </section>
  )
}

export default Servicios