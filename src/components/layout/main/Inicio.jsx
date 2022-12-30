import React, { useEffect, useState } from 'react'
import './home.css'
import urlImage from'./../../../images/yo.jpg';
import urlCV from'./../../../docs/cv.pdf'
import getFirebaseData from '../../../helpers/getFirebaseData';


const Inicio = () => {

  const [data, setData] = useState({})
  useEffect(() => {
    getFirebaseData('aboutMe')
    .then(info=>setData(...info))
}, [])

  
  if(Object.keys(data).length>0){
    return (
      <section className='page presentation' data-aos="zoom-in">
        <div className="presentation-container" data-aos="flip-left" data-aos-duration="600">
        <div className="presentation__img">
          <img src={urlImage} alt="yo"/>
        </div>
        <div className="presentation__description">
          <div className="presentation__text">
                            <p>HOLA YO SOY</p>
                            <h1>{data.name}</h1>
                            <p>{data.description}</p>
          </div>
          <div className="cv-container">
            <div className="presentation__cv">
                <a href={urlCV} download>Descargar CV</a>
            </div>
                
            <ul className="presentation__social-networks">
                <li>
                  <a href="https://www.instagram.com/alex.rodriguez.09/" target="_blank"><i className="fa fa-instagram"></i></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/alex-agustin-rodriguez-1a29b5218/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="https://github.com/AlexAR93" target="_blank"><i className="fa-brands fa-github"></i></a>
                </li>
            </ul>
          </div>
        </div>
        </div>
  
      <section className="about-me">
        <h3>ME PRESENTO</h3>
        <p>{data.presentation}
        </p>
      </section>      
      </section>
    )
  }else{
    return(
      <section className='page presentation' data-aos="zoom-in">
        <h2>Cargando...</h2>
      </section>
    )
  }

  
}

export default Inicio