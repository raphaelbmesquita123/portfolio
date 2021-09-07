import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
    45deg,
    var(--black-100),
    var(--blue-100),
    var(--black-100),
    var(--red-100),
    var(--black-100)
  );
  background-size: 1100% 300%;
  animation: colors 10s ease-in-out infinite;
  color: white;

  @keyframes colors {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  section {
    width: 65%;
    min-width: 290px;
    z-index: 1;
    h1 {
      width: 100%;
      font-size: auto;
      color: var(--black-50);
      span {
        color: var(--red-70);
      }
    }
    h3 {
      margin-top: 1rem;
      color: var(--black-50);
      span {
        color: var(--red-70);
      }
      text-align: justify;
    }
    p {
      margin-top: 1rem;
      text-align: justify;
      color: var(--black-70);
      letter-spacing: 1px;
      line-height: 1.4rem;
      max-height: 11rem;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      a {
        text-decoration: none;
        color: var(--red-70);
      }
    }
    div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 1rem;
      img {
        padding: 0.5rem;
        height: 3rem;

        &:first-child {
          padding-left: 0;
        }
      }
    }
  }
`
