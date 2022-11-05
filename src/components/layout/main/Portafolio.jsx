import React, { useEffect, useState } from 'react'
import {getFirestore,collection,getDocs, query, orderBy} from 'firebase/firestore'
import { Link } from 'react-router-dom'
import './portafolio.css'
const Portafolio = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const querydb=getFirestore();
    const queryCollection=query(collection(querydb,'proyects'))
    getDocs(query(queryCollection,orderBy('order','asc')))
    .then(data=>setData(data.docs.map(proyect=>({id:proyect.id,...proyect.data()}))))
  }, [])

  return (
    <section className='page' data-aos="zoom-in">
      <h1 className='heading'>Portafolio</h1>
      <div className="proyects">
        {
          data.length>0?(
            data.map(proyect=>((
              <article className='proyects__card' key={proyect.id}>
                  <img src={proyect.image} alt={`proyecto ${proyect.name}`}/>
                  <div>
                  <h2><Link to={`/proyecto`}>{proyect.name}</Link></h2>
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

export default Portafolio