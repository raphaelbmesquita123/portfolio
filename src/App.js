import React,{ useState } from 'react'

import { GlobalStyle } from './styles/globalStyles'
import { Container, Carousel,Menu } from './styles/styles'

import { Home } from './pages/home/home'
import { Portfolio } from './pages/portfolio/Portfolio';

function App() {
  const [ menu, setMenu ] = useState(1)
  return (
    <div>
      <GlobalStyle />
      
      <Menu>
        <ul>
          <li onClick={() => setMenu(1)}>
              <p style={{ color: menu === 1 ? 'var(--black-70)' : 'white' }}>Home </p>
          </li>
          <li onClick={() => setMenu(2)}>
              <p style={{ color: menu === 2 ? 'var(--black-70)' : 'white' }}>Portfolio</p>
          </li>
          <li onClick={() => setMenu(3)}>
            <p style={{ color: menu === 3 ? 'var(--black-70)' : 'white' }}>Contact</p>
          </li>
        </ul>
      </Menu>
      <Container>
        <Carousel style={{ left: menu === 1 ? '0' : menu === 2 ? '-100%' : '-200%'}}>
          <Home/>
          <Portfolio />
        </Carousel>
      </Container>
    </div>
  );
}

export default App;
