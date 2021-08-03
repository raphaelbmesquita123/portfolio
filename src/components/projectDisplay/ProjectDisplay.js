import React from 'react'
import { Container } from './styles'

export function ProjectDisplay({ projectImage, name, projectLink, imageTecnology }) {
    return (
        <Container>
            <img src={projectImage} alt={name} />
            <div>
                <div>
                    <p>{name}</p>
                    <a href={projectLink} rel="noopener noreferrer" target="_blank">Open project</a>
                </div>
                <img src={imageTecnology} alt="tecnology" />
            </div>
        </Container>
    )
}
