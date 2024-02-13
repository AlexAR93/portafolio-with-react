import React, { useEffect, useState } from 'react'

const Works = ({getFirebaseData}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        getFirebaseData('works','date','desc')
        .then(proyects=>setData(proyects))
    }, [])
  return (
    <section className='page' data-aos="zoom-in">
       <h1>Mis Trabajos</h1>
       <div className="proyects">
         {
           data.length>0?(
             data.map(proyect=>((
               <article className='proyects__card' key={proyect.id}>
                   <img src={proyect.image[0]} alt={`proyecto ${proyect.customerInformation.name}`}/>
                   <div>
                    <h2>{proyect.customerInformation.name}</h2>
                    <h3>{proyect.tecnologies.join(' ')}</h3>
                    <p>{proyect.description}</p>
                    <div className="link">
                      <a href={proyect.customerInformation.urlPage} target='_blank'>Page</a>
                      <a href={proyect.customerInformation.socialNetwork} target='_blank'>Contacto</a>
                    </div>
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

export default Works