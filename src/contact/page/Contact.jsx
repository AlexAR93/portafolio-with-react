
import { useForm, ValidationError } from '@formspree/react';

import './contact.css';
export const Contact = () => {

  const [state, handleSubmit] = useForm("mgedovwk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <section className='page' data-aos="zoom-in">
      <h1 className='heading'>Contacto</h1>

      <form onSubmit={handleSubmit} className="card">
                <fieldset className="contact__container" data-aos="flip-right" data-aos-duration="800">
                    <div className="name-container">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" placeholder="Alex" required />
                    </div>
                    <div className="surname-container">
                        <label htmlFor="surname">Apellido</label>
                        <input type="text" name="surname" id="surname" placeholder="Rodriguez" required />
                    </div>
                    <div className="email-container">
                      <label htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email" 
                        name="email"
                        placeholder='alexrodriguez@hotmail.com'
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                    <div className="affair-container">
                        <label htmlFor="affair">Asunto</label>
                        <input type="text" name="affair" id="affair" required />
                    </div>
                    <div className="message-container">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                          id="message"
                          name="message"
                        />
                        <ValidationError 
                          prefix="Message" 
                          field="message"
                          errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting}>Enviar</button>
                </fieldset>
            </form>
    </section>
  )
}
