import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    
    background: linear-gradient(75deg, #000000 , #04101A, #000000, #04101A);
    background-size: 400% 100%;
    animation: colors 5s ease-in-out infinite;
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
        min-width: 320px;

        h1{
            width: 100%;
            font-size: auto;
            span{
                color: red;
            }
        }
        h3{
            margin-top: 1rem;
            span{
                color: red;
            }
            text-align: justify;
        }
        p{
            margin-top: 1rem;
            text-align: justify;
        }

    }
`
    