import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
const urlImage='./src/assets/images/i.jpg';
const urlCV='./src/assets/docs/cv.pdf'
const Inicio = () => {
  return (
    <section className='page presentation' data-aos="zoom-in">
      <div className="presentation-container" data-aos="flip-left" data-aos-duration="600">
      <div className="presentation__img">
        <img src={urlImage} alt="yo"/>
      </div>
      <div className="presentation__text">
                        <p>HOLA YO SOY</p>
                        <h1><span>ALEX</span> RODRIGUEZ</h1>
                        <p><span>Estudiante de desarrollo web front-end</span> en plena etapa de aprendizaje con coder house y estudiante de licenciatura en informática de la universidad de Quilmes</p>
                    </div>
                    <div className="cv-container">
                        <div className="presentation__cv">
                            <a href="./assets/docs/cv.pdf" download>Descargar CV</a>
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

      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis poryectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <div className='works'>

        </div>
      </section>
                    
    </section>
  )
}

export default Inicio