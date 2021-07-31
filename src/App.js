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
              <p style={{ }}>Home </p>
              <span style={{ top: menu === 1 ? 0 : -100}}>Home</span>
          </li>
          <li onClick={() => setMenu(2)}>
              Portfolio
              <span style={{ top: menu === 2 ? 0 : -100}}>Portfolio</span>
          </li>
          <li onClick={() => setMenu(3)}>
              Contact
              <span style={{ top: menu === 3 ? 0 : -100}}>Contact</span>
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
