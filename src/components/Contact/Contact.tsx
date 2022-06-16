import './contact.scss';

import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

function Contact() {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9excqah',
      'template_kaf2ycl',
      form.current,
      'LMqRg6xTb1MAJKvAC',
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Entre em contato</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gusttavo.x.santos@gmail.com</h5>
            <a href="mailto:gusttavo.x.santos@gmail.com" target="_blank" rel="noreferrer">
              Me envie uma mensagem
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55119999999</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5511951485332"
              target="_blank"
              rel="noreferrer"
            >
              Me envie uma mensagem
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome completo"
            required
          />
          <input type="email" name="email" placeholder="Digite seu email" required />
          <textarea name="message" rows={10} placeholder="Mensagem"></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
