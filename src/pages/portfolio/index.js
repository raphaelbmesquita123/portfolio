import React from 'react'
import { AnimateOnChange } from 'react-animation'

//component
import { ProjectDisplay } from '../../components/projectDisplay'

//styles
import { Container } from './styles'

export function Portfolio() {
  return (
    <Container>
      <AnimateOnChange
        animationIn='custom-animation-in 500ms ease-out forwards'
        animationOut='custom-animation-out 500ms ease-out forwards'
        durationOut={600}
      >
        <main>
          <h1>Projects</h1>
          <p>
            Here are some of the projects that I have developed or was part of
            one of the challenges from the course or Bootcamp.
          </p>
          <span>
            <ProjectDisplay
              projectImage='testCourse.png'
              name='Test Course Website'
              description='This is a Fullstack application created with ReactJs, NodeJs, Strapi, and MongoDb, you can create your account, log in, buy a course, and at the end of your course a certificate will be available for download.** Application not finished yet **'
              projectLink='https://web-courses-frontend.herokuapp.com/'
              imageTecnology='./react.png'
              />
            <ProjectDisplay
              projectImage='pokemonPage.png'
              name='Pokemon Page'
              description='Do you remember Pokemon? I would love to know about this website when I was 15 hahahahaha, created with ReactJs, this application allows you to choose the pokemon`s card by its type and also search for the card by its name, add to the basket and buy it'
              projectLink='https://pokemon-shop-cipag78ms-raphaelbmesquita123.vercel.app/'
              imageTecnology='./react.png'
            />
            <ProjectDisplay
              projectImage='graficaMesquita.png'
              name='Gráfica e Editora Mesquita'
              description='Single page website created with ReactJs and Emailjs to receive the messages from the user, the designer was created by me and at the moment I am just waiting for the client to send me rest of the information to finish it. ** Application not finished yet **'
              projectLink='https://graficamesquita.vercel.app/'
              imageTecnology='./react.png'
            />
            <ProjectDisplay
              projectImage='firstProject.png'
              name='50 Projects 50 Days'
              description='The first project you never forget, 50 Projects in 50 Days, is the name of the course that I have done from Udemy, on this application you can the most relevant projects, with HTML, CSS, and JavaScript, this course was the start of everything.'
              projectLink='https://raphaelbmesquita123.github.io/RaphaelMesquita/'
            />
          </span>
        </main>
      </AnimateOnChange>
    </Container>
  )
}
