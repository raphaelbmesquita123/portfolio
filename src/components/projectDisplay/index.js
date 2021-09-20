import React, { useState } from 'react'

//styles
import { Container } from './styles'

//images
import Github from '../../images/github.png'

export function ProjectDisplay({
  projectImage,
  name,
  projectLink,
  imageTecnology,
  description,
  githubLink,
}) {
  const [showDescription, setShowDescription] = useState(false)
  return (
    <Container>
      <section>
        <img src={projectImage} alt={name} />
        <h2 onClick={() => setShowDescription(!showDescription)}>info</h2>

        <h3 style={{ top: showDescription ? '0rem' : '-100%' }}>
          {description}
        </h3>
      </section>
      <div>
        <div>
          <p>{name}</p>
          <a href={projectLink} rel='noopener noreferrer' target='_blank'>
            Open project
          </a>
        </div>
        <section>
          <a href={githubLink} rel='noopener noreferrer' target='_blank'>
            <img src={Github} alt='tecnology' />
          </a>
          {imageTecnology && <img src={imageTecnology} alt='tecnology' />}
        </section>
      </div>
    </Container>
  )
}
