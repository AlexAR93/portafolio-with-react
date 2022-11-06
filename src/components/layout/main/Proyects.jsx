import React, { useEffect, useState } from 'react';

const Proyects = ({getFirebaseData}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        getFirebaseData('proyects','order','asc')
        .then(proyects=>setData(proyects))
    }, [])
  return (
    <section className='page' data-aos="zoom-in">
       <h1>Mis proyectos</h1>
       <div className="proyects">
         {
           data.length>0?(
             data.map(proyect=>((
               <article className='proyects__card' key={proyect.id}>
                   <img src={proyect.image} alt={`proyecto ${proyect.name}`}/>
                   <div>
                    <h2>{proyect.name}</h2>
                    <h3>{proyect.tecnologies.join(' ')}</h3>
                    <p>{proyect.description}</p>
                    <div className="link">
                      <a href={proyect.urlPage} target='_blank'>Page</a>
                      <a href={proyect.urlRepository} target='_blank'>Repo</a>
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

export default Proyects