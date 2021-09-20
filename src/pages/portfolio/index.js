import React from 'react'
import { AnimateOnChange } from 'react-animation'

//component
import { ProjectDisplay } from '../../components/projectDisplay'

//styles
import { Container } from './styles'

//images
import TestCourse from '../../images/testCourse.png'
import PokemonPage from '../../images/pokemonpage.png'
import upFi from '../../images/upFi.png'
import GraficaMesquita from '../../images/graficaMesquita.png'
import FirstProject from '../../images/firstProject.png'
import ReactJs from '../../images/react.png'
import NextJs from '../../images/next.png'

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
              projectImage={TestCourse}
              name='Test Course Website'
              description='This is a Fullstack application created with ReactJs, NodeJs, Strapi, and MongoDb, you can create your account, log in, buy a course, and at the end of your course a certificate will be available for download.** Application not finished yet **'
              projectLink='https://web-courses-frontend.herokuapp.com/'
              imageTecnology={ReactJs}
              githubLink='https://github.com/raphaelbmesquita123/testcourses'
            />
            <ProjectDisplay
              projectImage={PokemonPage}
              name='Pokemon Page'
              description='Do you remember Pokemon? I would love to know about this website when I was 15 hahahahaha, created with ReactJs, this application allows you to choose the pokemon`s card by its type and also search for the card by its name, add to the basket and buy it'
              projectLink='https://pokemon-shop-cipag78ms-raphaelbmesquita123.vercel.app/'
              imageTecnology={ReactJs}
              githubLink='https://github.com/raphaelbmesquita123/pokemon-shop'
            />
            <ProjectDisplay
              projectImage={upFi}
              name='upFi'
              description='This application was the callenge 7 from Rocketseat Bootcamp'
              projectLink='https://ignite-challenge-07.vercel.app/'
              imageTecnology={NextJs}
              githubLink='https://github.com/raphaelbmesquita123/ignite-challenge-07'
            />
            <ProjectDisplay
              projectImage={GraficaMesquita}
              name='Gráfica e Editora Mesquita'
              description='Single page website created with ReactJs and Emailjs to receive the messages from the user, the designer was created by me and at the moment I am just waiting for the client to send me rest of the information to finish it. ** Application not finished yet **'
              projectLink='https://graficamesquita.vercel.app/'
              imageTecnology={ReactJs}
              githubLink='https://github.com/raphaelbmesquita123/graficamesquita'
            />
            <ProjectDisplay
              projectImage={FirstProject}
              name='50 Projects 50 Days'
              description='The first project you never forget, 50 Projects in 50 Days, is the name of the course that I have done from Udemy, on this application you can the most relevant projects, with HTML, CSS, and JavaScript, this course was the start of everything.'
              projectLink='https://raphaelbmesquita123.github.io/RaphaelMesquita/'
              githubLink='https://github.com/raphaelbmesquita123/RaphaelMesquita'
            />
          </span>
        </main>
      </AnimateOnChange>
    </Container>
  )
}
