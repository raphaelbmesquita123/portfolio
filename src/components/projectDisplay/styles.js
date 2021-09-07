import styled from 'styled-components'

export const Container = styled.div`
  section {
    position: relative;
    overflow: hidden;
    img {
      border: 0.2rem solid transparent;
      width: 100%;
      transition: border-color 0.1s ease-in;

      &:hover {
        border-color: var(--red-70);
      }
    }
    h3 {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      transition: all 0.5s;
      color: var(--black-70);
      background: rgba(0, 0, 0, 0.8);
      width: 100%;
      height: 100%;
      padding: 1rem;
      text-align: justify;
      font-size: 0.8rem;
      letter-spacing: 1px;
      line-height: 1.3rem;
    }
    h2 {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      color: white;
      cursor: pointer;
      font-size: 0.7rem;
      z-index: 2;

      &:hover {
        color: var(--red-70);
      }
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 0;

    div {
      flex-direction: column;
      padding: 0;
      p {
        padding: 0;
        margin: 0;
        color: white;
        font-size: 1rem;
      }
      a {
        text-decoration: none;
        color: white;
        margin-top: 0.3rem;
        font-size: 0.7rem;
        color: var(--black-50);
        cursor: pointer;

        &:hover {
          color: var(--red-70);
        }
      }
    }
    img {
      height: 1.5rem;
      width: auto;
      margin-right: 1rem;
      margin-top: 0.5rem;
      border: none;
    }
  }
`
