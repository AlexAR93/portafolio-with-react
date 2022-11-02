import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../../../data/trabajos'
const Portafolio = () => {
  return (
    <section className='page' data-aos="fade-down">
      <h1 className='heading'>Portafolio</h1>

      {
        trabajos.map(trabajo=>((
          <article key={trabajo.id}>
            <span>{trabajo.categorias}</span>
              <h2><Link to={`/proyecto`}>{trabajo.nombre}</Link></h2>
              <h3>{trabajo.tecnologias}</h3>
          </article>
          )

        ))
      }
    </section>
  )
}

export default Portafolio