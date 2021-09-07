import React from 'react'
import { AnimateOnChange } from 'react-animation'

//styles
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <section>
        <AnimateOnChange
          animationIn='custom-animation-in 500ms ease-out forwards'
          animationOut='custom-animation-out 500ms ease-out forwards'
          durationOut={600}
        >
          <h1>
            Hello! I'm <span>Raphael Mesquita</span>{' '}
          </h1>
          <h3>
            Passionate for new experiences and challenges that can change my
            life
          </h3>
          <p>
            I'm a Software Engineer focused on Web development, I'm currently
            working on a project for{' '}
            <a
              href='https://texassteakout.ie/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Texas Steakout
            </a>{' '}
            based in Limerick Ireland, working as a freelancer, finishing my
            degree in Analyzes and Systems Development at{' '}
            <a
              href='https://www.unigraneuropa.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Unigran
            </a>
            , and a student from{' '}
            <a
              href='https://rocketseat.com.br/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Rocketseat
            </a>{' '}
            which is one of the best schools for Software Engineer in Brazil, at
            the moment I have done the full Bootcamp called Ignite (ReactJs -
            NectJs) and now I currently studying the NodeJs Bootcamp.
          </p>
          <h3>
            <span>EXPERTISE IN WEB APPLICATION</span>
          </h3>
          <div>
            <img src='./javaScript.png' alt='JavaScript' />
            <img src='./react.png' alt='react' />
            <img src='./next.png' alt='next' />
            <img src='./nodeJs.png' alt='nodeJs' />
            <img src='./mongoDB.png' alt='mongoDB' />
            <img src='./fireBase.png' alt='Firebase' />
          </div>
        </AnimateOnChange>
      </section>
    </Container>
  )
}
