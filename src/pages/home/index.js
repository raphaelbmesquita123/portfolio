import React from 'react'
import { AnimateOnChange } from 'react-animation'

//styles
import { Container } from './styles'

//images
import ReactJs from '../../images/react.png'
import FireBase from '../../images/fireBase.png'
import GitHub from '../../images/github.png'
import MongoDB from '../../images/mongoDB.png'
import NextJs from '../../images/next.png'
import NodeJs from '../../images/nodeJs.png'
import JavaScript from '../../images/javaScript.png'

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
            which is one of the best schools for Software Engineer in Brazil.
          </p>
          <h3>
            <span>Expertise in web application</span>
          </h3>
          <div>
            <img src={JavaScript} alt='JavaScript' />
            <img src={ReactJs} alt='react' />
            <img src={NextJs} alt='next' />
            <img src={NodeJs} alt='nodeJs' />
            <img src={MongoDB} alt='mongoDB' />
            <img src={FireBase} alt='Firebase' />
            <img src={GitHub} alt='Github' />
          </div>
        </AnimateOnChange>
      </section>
    </Container>
  )
}
