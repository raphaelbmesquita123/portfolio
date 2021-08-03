import styled from 'styled-components'

export const Container = styled.div`
    img{
        border: 0.2rem solid transparent;
        width: 100%;
        transition: border-color 0.1s ease-in;

            &:hover{
            border-color: var(--red-70);
        }
    }
    div{
        display: flex;
        justify-content: space-between;
        margin-top: 0;

        div{
            flex-direction: column;
            padding: 0;
            p{
                padding: 0;
                margin: 0;
                color: white;
                font-size: 1rem;
            }
            a{
                text-decoration: none;
                color: white;
                margin-top: 0.3rem;
                font-size: 0.7rem;
                color: var(--black-50);
                cursor: pointer;

                &:hover{
                    color: var(--red-70);
                }
            }
        }
        img{
            height: 1.5rem;
            width: auto;
            margin-right: 1rem;
            margin-top: 0.5rem;
            border: none;
        }
    }
`