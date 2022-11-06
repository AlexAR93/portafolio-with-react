import React, { useEffect, useState } from 'react'

const Tecnologies = ({getFirebaseData}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        getFirebaseData('tecnologies','name','desc')
        .then(proyects=>setData(proyects))
    }, [])
  return (
    <section className='page' data-aos="zoom-in">
       <h1>Tecnologias que domino</h1>
       <div className="tecnologies">
         {
           data.length>0?(
             data.map(tecnology=>((
               <article className='tecnologies__card' key={tecnology.id}>
                   <img src={tecnology.urlImage} alt={`${tecnology.name}`}/>
                   <div>
                    <h2>{tecnology.name}</h2>
                    <p>{tecnology.description}</p>
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

export default Tecnologies