import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './home.css'
import urlCV from'./../../docs/cv.pdf'
import { getData } from '../../store/slices/mydata';
import { Loading } from '../../ui';
import { IconButton } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';



export const Home = () => {
  
  const dispatch= useDispatch();
  const {data,isLoading}=useSelector(state=> state.myData)
//!a cambiar
  useEffect(() => {
    dispatch( getData('aboutMe'));
  }, [])

  if(Object.keys(data).length>0&&isLoading==false){
    return (
      <section className='page presentation' data-aos="zoom-in">
        <div className="presentation-container" data-aos="flip-left" data-aos-duration="600">
        <div className="presentation__img">
          <img src={data[0].image} alt="yo"/>
        </div>
        <div className="presentation__description">
          <div className="presentation__text">
                            <p>HOLA, SOY</p>
                            <h1><span>{data[0].name}</span> {data[0].surname}</h1>
                            <h2>{data[0].description}</h2>
                      
          </div>
          <div className="cv-container">
            <div className="presentation__cv">
                <a href={urlCV} download>Descargar CV</a>
            </div>
                
            <ul className="presentation__social-networks">
                <li>
                  <IconButton href="https://github.com/AlexAR93" target="_blank" color="inherit">
                    <GitHub />
                  </IconButton>
                </li>
                <li>
                  <IconButton href="https://www.linkedin.com/in/alex-agustin-rodriguez-1a29b5218/" target="_blank" color="inherit">
                    <LinkedIn />
                  </IconButton>
                </li>
                <li>
                  <IconButton href="mailto:aleexrodriguez93@gmail.com" color="inherit">
                    <Email />
                  </IconButton>
                </li>
            </ul>
          </div>
        </div>
        </div>
  
      <section className="about-me">
        <h3>SOBRE MÍ</h3>
        <p>{data[0].presentation}
        </p>
      </section>      
      </section>
    )
  }else{
    return(
      <div className='page presentation'>
        <div className="presentation-container" >
          <div className='loading-container'>
            <Loading/>
          </div>
        </div>
      </div>
    )
  }

  
}
