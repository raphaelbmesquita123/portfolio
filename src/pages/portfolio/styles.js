import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: var(--black-100);
  main {
    margin-top: 6rem;
    padding: 0 2rem;

    h1 {
      color: var(--red-70);
    }

    p {
      color: var(--black-70);
      text-align: justify;
      margin-top: 1rem;
      line-height: 1.4rem;
    }
    span {
      display: grid;
      height: calc(100vh - 250px);
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      margin-top: 2rem;
      overflow-y: scroll;
      gap: 2rem;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`
