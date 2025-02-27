import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getData } from '../../store/slices/mydata';
import { Loading } from '../../ui';

export const Certificates = () => {
  
  const [currentCertificateView, setCurrentCertificateView] = useState({
    value:false
  })

  const dispatch= useDispatch();
  const {data,isLoading}=useSelector(state=> state.myData)

  useEffect(() => {
    dispatch( getData('certificates') );
  }, []);

  const openImage=(e)=>{
    setCurrentCertificateView({
      value:true,
      src:e.target.src,
      name:e.target.alt
    })
  }
  const closeImage=()=>{
    setCurrentCertificateView({
      value:false
    })
  }

  return (
  <>
     {
      
           data.length>0&&isLoading==false?(
            <section className='page portfolio-main' data-aos="zoom-in">
            <h1>Certificados</h1>
            <div className="certificates">
             {data.map(certificate=>((
               <article className='certificates__card' key={certificate.id}>
                   <img src={certificate.image} alt={`${certificate.name}`}
                   onClick={e=>openImage(e)}/>
                   <div>
                        <h2>{certificate.name}</h2>
                   </div>
               </article>
  ))
)    }   </div>
</section>  )
:
             <Loading/>
  }
    {
          currentCertificateView.value==true?(
            <div className='certificate-view'>
              <div className='certificate-view__container' onClick={closeImage}>
                
              </div>
              <div className='certificate-view__img'>
                <img src={currentCertificateView.src} alt=""/>
              </div>
            </div>
          ):false
     }
  </>
  )
}
