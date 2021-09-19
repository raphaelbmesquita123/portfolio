import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'

//pages
import { Home } from './pages/home'
import { Portfolio } from './pages/portfolio'
import { Contact } from './pages/contact'

//styles
import { GlobalStyle } from './styles/globalStyles'
import { AppContainer, Container, Carousel, Menu } from './styles/styles'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [menu, setMenu] = useState(1)
  return (
    <AppContainer>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Menu>
        <ul>
          <li onClick={() => setMenu(1)}>
            <p style={{ color: menu === 1 ? 'var(--black-50)' : 'white' }}>
              Home{' '}
            </p>
          </li>
          <li onClick={() => setMenu(2)}>
            <p style={{ color: menu === 2 ? 'var(--black-50)' : 'white' }}>
              Portfolio
            </p>
          </li>
          <li onClick={() => setMenu(3)}>
            <p style={{ color: menu === 3 ? 'var(--black-50)' : 'white' }}>
              Contact
            </p>
          </li>
        </ul>
      </Menu>
      <Container>
        <Carousel
          style={{ left: menu === 1 ? '0' : menu === 2 ? '-100%' : '-200%' }}
        >
          <Home />
          <Portfolio />
          <Contact />
        </Carousel>
      </Container>

      <strong
        style={{
          width: menu === 1 ? '2.5rem' : menu === 2 ? '9.4rem' : '16.5rem',
        }}
      >
        <span></span>
      </strong>
    </AppContainer>
  )
}

export default App
