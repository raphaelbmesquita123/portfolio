import React from 'react'
import { FaDownload, FaGithub, FaInstagram, FaMouse } from 'react-icons/fa'
import emailjs from 'emailjs-com'

//styles
import { Container, DownloadContainer } from './styles'

export function Contact() {
  function sendEmail(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_xfskimn',
        'template_a3j93kc',
        e.target,
        'user_b3vLK4nmsJDCovCRtPpoB'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
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
            <a href='/' target='_blank'>
              <FaGithub />
            </a>
            <a href='/' target='_blank'>
              <FaInstagram />
            </a>
            <a href='/' target='_blank'>
              <FaMouse />
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
