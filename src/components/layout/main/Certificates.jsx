import React, { useEffect, useState } from 'react'


const Certificates = ({getFirebaseData}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        getFirebaseData('certificates','name','desc')
        .then(proyects=>setData(proyects))
    }, [])
  return (
    <section className='page' data-aos="zoom-in">
          <h1>Certificados</h1>
          <div className="certificates">
         {
           data.length>0?(
             data.map(certificate=>((
               <article className='certificates__card' key={certificate.id}>
                   <img src={certificate.image} alt={`${certificate.name}`}/>
                   <div>
                        <h2>{certificate.name}</h2>
                   </div>
               </article>
               )
             ))
           ):<div className='proyects__card'>
             <h2>Cargando...</h2>
           </div>
         }
       </div>
    </section>
  )
}

export default Certificates