import React, { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getData } from '../../store/slices/mydata';
import { Loading } from '../../ui';
export const Tecnologies = ({getFirebaseData}) => {
  const dispatch= useDispatch();
  const {data,isLoading}=useSelector(state=> state.myData)

  useEffect(() => {
    dispatch( getData('tecnologies'));
  }, [])
  return (
    <section className='page' data-aos="zoom-in">
       <h1>Tecnologias que domino</h1>
       <div className="tecnologies">
         {
           data.length>0&&isLoading==false?(
             data.map(tecnology=>((
               <article className='tecnologies__card' key={tecnology.id}>
                   <img src={tecnology.urlImage} alt={`${tecnology.name}`}/>
                   <div>
                    <h2>{tecnology.name}</h2>
                   </div>
               </article>
               )
             ))
           ):<div className='loading-container'>
              <Loading/>
            </div>
         }
       </div>
     </section>
  )
}