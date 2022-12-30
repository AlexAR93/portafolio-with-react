import React, { useEffect, useState } from 'react'
import getFirebaseData from '../../../helpers/getFirebaseData'
import './services.css'
const Servicios = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getFirebaseData('services','order','asc')
    .then(info=>setData(info))
}, [])
  return (
    <section className='page' data-aos="zoom-in">
      <h1 className='heading'>Servicios</h1>

      <section className='services'>
        {
          data.length>0?(
            data.map(service=>
              <article key={service.id} className='service'>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
              </article>)
          ):(
            <h2>Cargando...</h2>
          )
        }
      </section>
    </section>
  )
}

export default Servicios