import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import urlImage from'./../../../images/yo.jpg';
import urlCV from'./../../../docs/cv.pdf'
const Inicio = () => {
  return (
    <section className='page presentation' data-aos="zoom-in">
      <div className="presentation-container" data-aos="flip-left" data-aos-duration="600">
      <div className="presentation__img">
        <img src={urlImage} alt="yo"/>
      </div>
      <div className="presentation__description">
        <div className="presentation__text">
                          <p>HOLA YO SOY</p>
                          <h1><span>ALEX</span> RODRIGUEZ</h1>
                          <p><span>Estudiante de desarrollo web full-stack</span> con coder house y de licenciatura en informática en la universidad de Quilmes.</p>
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
      <p>Soy de Argentina, Buenos Aires, localidad Berazategui. Tengo 20 años y actualmente soy estudiante de la carrera React y programación backend en coderhouse. Támbien soy estudiante de licenciatura en informática en la universidad nacional de Quilmes, soy autodidacta y me capacite con varios cursos de programación web en Udemy y YouTube, como JS y React con los profesores Fernando Herrera y Victor Robles.
      </p>
    </section>      
    </section>
  )
}

export default Inicio