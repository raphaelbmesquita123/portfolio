import styled from 'styled-components'

export const AppContainer = styled.div`
  strong {
    position: absolute;
    content: '';
    height: 1px;
    width: 30%;
    background-color: var(--black-50);
    left: 0;
    transition: width 0.8s ease-in-out;
    top: 60px;

    span {
      position: absolute;
      content: '';
      height: 3px;
      width: 0.7rem;
      height: 0.7rem;
      left: 100%;
      bottom: -4.5px;
      border-radius: 100%;
      background-color: var(--black-50);
      transition: left 0.8s ease-in-out;
    }
  }
`

export const Container = styled.main`
  display: flex;
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

export const Carousel = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  transition: left 0.8s ease-in-out;
`

export const Menu = styled.nav`
  position: absolute;
  top: 0;

  ul {
    display: flex;
    list-style: none;
    li {
      position: relative;
      cursor: pointer;
      padding: 1.5rem;
      z-index: 3;
      color: white;
      font-weight: bold;

      &:first-child {
        margin-left: 0;
      }
    }
  }
`
