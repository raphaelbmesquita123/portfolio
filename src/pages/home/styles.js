import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    width: 100vw;
    height: 100vh;
    
    background: linear-gradient(
        90deg, 
        var(--black-100), 
        var(--blue-100), 
        var(--black-100),
        var(--red-100),
        var(--black-100)
        );
    background-size: 1100% 300%;
    animation: colors 10s ease-in-out infinite;
    color: white;
    @keyframes colors{ 
        0%{
        background-position: 0% 50%;
        }
        50%{
        background-position: 100% 50%;
        }
        100%{
        background-position: 0% 50%;
        }
    }

    div{
        width: 65%;
        min-width: 270px;

        h1{
            width: 100%;
            font-size: auto;
            span{
                color: var(--red-70);
            }
        }
        h3{
            margin-top: 1rem;
            span{
                color: var(--red-70);
            }
            text-align: justify;
        }
        p{
            margin-top: 1rem;
            text-align: justify;
        }
        div{
            display: flex;
            /* justify-content: center; */
            align-items: center;
            flex-wrap: wrap;
            /* background: orange; */
            width: 100%;
            img{
                padding: 0.5rem;
                height: 3rem;

                &:first-child{
                    padding-left: 0;
                }

            }

        }

    }
`
    