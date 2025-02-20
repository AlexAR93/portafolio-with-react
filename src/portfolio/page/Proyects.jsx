import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getData } from '../../store/slices/mydata';
import { Loading } from "./../../ui";

export const Proyects = () => {
  const dispatch= useDispatch();
  const {data,isLoading}=useSelector(state=> state.myData)

  useEffect(() => {
    dispatch( getData('proyects','createAt') );
  }, []);

  return (
    <>{
    data.length>0&&isLoading==false?(
      <section className='page portfolio-main' data-aos="zoom-in">
      <h1>Mis proyectos</h1>
      <div className="proyects">
      {data.map(proyect=>((
               <article className='proyects__card' key={proyect.id}>
                   <img src={proyect.image} alt={`proyecto ${proyect.name}`}/>
                   <div>
                    <h2>{proyect.name}</h2>
                    <h3>{proyect?.tecnologies?.join(' ')}</h3>
                    <p>{proyect.description}</p>
                    <div className="link">
                      <a href={proyect.urlPage} target='_blank'>Page</a>
                      <a href={proyect.urlRepository} target='_blank'>Repo</a>
                    </div>
                   </div>
               </article>


  ))
)}
</div>
</section>
):<Loading/>
              }
  </>
  )
}
