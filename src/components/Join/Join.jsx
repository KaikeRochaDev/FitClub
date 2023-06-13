import React from 'react'
import './Join.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_oonqa4q', 'template_wrh7uai', form.current, 'wfXksa95nYtuUcbwl')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>PRONTO PARA</span>
                <span>ELEVAR</span>
            </div>

            <div>
                <span>O SEU CORPO</span>
                <span className='stroke-text'>CONOSCO?</span>
            </div>
        </div>

        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Digite seu e-mail'/>
                <button className='btn btn-j'>Inscreva-se</button>
            </form>
        </div>
    </div>
  )
}

export default Join