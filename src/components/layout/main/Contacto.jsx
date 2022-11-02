import React from 'react'

const Contacto = () => {
  return (
    <section className='page' data-aos="fade-down">
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto:aleexrodriguez93@gmail.com'>
        <input type='text' placeholder='Nombre'/>
        <input type='text' placeholder='Apellido'/>
        <input type='text' placeholder='Email'/>
        <textarea placeholder='Motivo de contacto'/>
        <input type='submit' value='Enviar'/>
        
      </form>
    </section>
  )
}

export default Contacto