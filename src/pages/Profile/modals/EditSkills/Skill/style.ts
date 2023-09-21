import styled from "styled-components";

const Style = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: ${props => props.theme.colors.primary.main};
    padding: 0.5rem 0.7rem;
    border-radius: 1rem;
    color: #FFF;
    svg{
        cursor: pointer;
    }
`

export default Style;