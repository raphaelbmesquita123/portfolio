import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--blue-70);

  div {
    display: flex;
    justify-content: center;
    width: 90%;

    main {
      display: flex;
      padding: 1rem;
      img {
        height: 30rem;
      }
      a {
        color: white;
        font-size: 2rem;
        margin-left: 1rem;
        transition: all 0.3s;
        &:hover {
          color: var(--blue-50);
        }
      }
    }

    section {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 35rem;
      padding: 0.5rem 3rem;
      min-width: 25rem;
      h1 {
        color: var(--blue-50);
      }
      form {
        position: relative;
        div {
          display: flex;
          flex-direction: column;
          width: 100%;
          input,
          textarea {
            padding: 1rem;
            width: 100%;
            margin-top: 1rem;
            border-radius: 0.5rem;
            border: 3px solid var(--blue-70);
            &:focus {
              outline: none;
              border: 3px solid var(--blue-50);
            }
          }
          textarea {
            height: 6rem;
          }
        }

        button {
          position: absolute;
          bottom: -3rem;
          right: 0;
          padding: 0.5rem;
          border-radius: 0.5rem;
          background-color: var(--blue-50);
          border: none;
          text-transform: uppercase;
          &:focus {
            outline: none;
          }
          &:active {
            transform: scale(0.98);
          }
        }
      }
      span {
        margin-top: 3rem;
        a {
          padding: 0.4rem 0.6rem;
          background: var(--blue-70);
          color: white;
          margin: 0.2rem;
          font-size: 1.4rem;
          border: 3px solid var(--blue-70);

          border-radius: 0.5rem;
          transition: all 0.3s;
          &:hover {
            border-color: var(--blue-50);
            color: var(--blue-50);
          }
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }

    @media (max-width: 650px) {
      main {
        display: none;
      }
    }
  }
`

export const DownloadContainer = styled.a`
  display: none;
  padding: 1.5rem;
  margin-top: 2rem;
  width: 100%;
  border: 3px solid var(--blue-50);
  border-radius: 1rem;
  text-transform: uppercase;
  transition: all 0.3s;
  text-decoration: none;
  text-align: center;

  &:hover {
    background: var(--blue-50);
    h1 {
      color: var(--blue-70);
    }
  }
  @media (max-width: 650px) {
    display: block;
  }
`
