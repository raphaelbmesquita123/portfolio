import React,{ useState } from 'react'
import { Container } from './styles'

export function Menu(){
    const [ menu, setMenu ] = useState(1)

    return(
        <Container>
            <ul>
                <li onClick={() => setMenu(1)}>Home</li>
                <li onClick={() => setMenu(2)}>Portfolio</li>
                <li onClick={() => setMenu(3)}>Contact</li>
            </ul>
        </Container>
    )
}