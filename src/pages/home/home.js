import React from 'react'
import { Container } from './styles'

export function Home(){
    return (
        <Container>
            <div>
                <h1>Hello! I'm <span>Raphael Mesquita</span> </h1>
                <h3>Passionate for new experiences and challenges that can change my life</h3>
                <p>I'm a Software Engineer focused on Web development, I'm currently working on a project for Texas Steakout based in Limerick Ireland, working as a freelancer, finishing my degree in Analyzes and Systems Development at Unigran, and a student from Rocketseat which is one of the best schools for Software Engineer in Brazil, at the moment I have done the full Bootcamp called Ignite (ReactJs - NectJs) and now I currently studying the NodeJs Bootcamp.</p>
                <h3><span>EXPERTISE IN WEB APPLICATION</span></h3>
                <div>
                    <img src="./javaScript.png" alt="JavaScript" />
                    <img src="./react.png" alt="react" />
                    <img src="./next.png" alt="next" />
                    <img src="./nodeJs.png" alt="nodeJs" />
                    <img src="./mongoDB.png" alt="mongoDB" />
                    <img src="./fireBase.png" alt="Firebase" />
                </div>
            </div>
        </Container>
    )
}