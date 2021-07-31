import styled from 'styled-components'

export const Container = styled.nav`
    position: absolute;
    top: 0;
    right: 3rem;
    padding: 2rem;
    background-color: orange;
    
    ul{
        display: flex;
        list-style: none;
        li{
            margin-left: 2rem;
            cursor: pointer;
            &:first-child{
                margin-left: 0;
            }
        }
    }
`