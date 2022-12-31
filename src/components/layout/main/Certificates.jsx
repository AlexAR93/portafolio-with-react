import React, { useEffect, useState } from 'react'


const Certificates = ({getFirebaseData}) => {
  
  const [currentCertificateView, setCurrentCertificateView] = useState({
    value:false
  })
  const [data, setData] = useState([])
  
    useEffect(() => {
        getFirebaseData('certificates','name','desc')
        .then(proyects=>setData(proyects))
    }, [])

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
    <section className='page' data-aos="zoom-in">
          <h1>Certificados</h1>
          <div className="certificates">
         {
           data.length>0?(
             data.map(certificate=>((
               <article className='certificates__card' key={certificate.id}>
                   <img src={certificate.image} alt={`${certificate.name}`}
                   onClick={e=>openImage(e)}/>
                   <div>
                        <h2>{certificate.name}</h2>
                   </div>
               </article>
               )
             ))
           ):(<div className='proyects__card'>
             <h2>Cargando...</h2>
           </div>)
         }
       </div>
    </section>
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

export default Certificates