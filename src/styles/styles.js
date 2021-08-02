import styled from 'styled-components'

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

    ul{
        display: flex;
        list-style: none;
        li{
            position: relative;
            cursor: pointer;
            padding: 1.5rem;
            z-index: 3;
            color: white;
            font-weight: bold;

            &:first-child{
                margin-left: 0;
            }
        }
    }
`