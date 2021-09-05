import React, { useState } from 'react'

//styles
import { Container } from './styles'

export function ProjectDisplay({
  projectImage,
  name,
  projectLink,
  imageTecnology,
  description,
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
        {imageTecnology && <img src={imageTecnology} alt='tecnology' />}
      </div>
    </Container>
  )
}
