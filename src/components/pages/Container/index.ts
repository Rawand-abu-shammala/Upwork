import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width:${props => props.theme.breakpoints.md}){
        width: 90%;
    }
   
    @media (max-width:${props => props.theme.breakpoints.sm}){
        width: calc(100% - 32px);
    }
`

export default Container;