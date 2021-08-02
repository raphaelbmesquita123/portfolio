import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: var(--red-70);
    main{
        margin-top: 7rem;
        padding: 0 2rem;

        h1{
            color: var(--black-30);
        }

        p{
            color: var(--black-50);
            text-align: justify;
            margin-top: 1rem;
            line-height: 1.4rem;
        }
        div{
            display: flex;
            flex-wrap: wrap;
            margin-top: 1rem;
            background: orange;
            height: calc(100vh - 220px);
            overflow: scroll;

            img{
                height: 150px;
            }
        }
    }
`