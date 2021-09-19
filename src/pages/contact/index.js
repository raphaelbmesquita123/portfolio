import React from 'react'
import { FaDownload, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'

//styles
import { Container, DownloadContainer } from './styles'

export function Contact() {
  function sendEmail(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        e.target,
        process.env.REACT_APP_USER
      )
      .then(
        (result) => {
          toast.info('Your message was sent successfully')
        },
        (error) => {
          toast.info('Sorry we had some problems, please try again later')
        }
      )
  }
  return (
    <Container>
      <div>
        <main>
          <img src='/raphaelCv.png' alt='Raphael Cv' />
          <a href='/RaphaelCv.pdf' target='_blank'>
            <FaDownload />
          </a>
        </main>

        <section>
          <h1>Contact Me</h1>
          <form onSubmit={sendEmail}>
            <div>
              <label htmlFor=''>
                <input type='text' placeholder='Name' required />
              </label>
              <label htmlFor=''>
                <input type='email' placeholder='Email' required />
              </label>
              <label htmlFor=''>
                <textarea
                  type='textarea'
                  placeholder='Drop me a Message'
                  required
                />
              </label>
            </div>

            <button type='submit'>Send</button>
          </form>

          <span>
            <a
              href='https://github.com/raphaelbmesquita123'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </a>
            <a
              href='https://www.instagram.com/raphaelbmesquita/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram />
            </a>
            <a
              href='https://www.linkedin.com/in/raphael-mesquita-/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn />
            </a>
          </span>

          <DownloadContainer href='/RaphaelCv.pdf' target='_blank'>
            <h1>Donwload my cv</h1>
          </DownloadContainer>
        </section>
      </div>
    </Container>
  )
}
