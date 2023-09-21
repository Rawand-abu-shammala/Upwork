import styled from "styled-components";

const Style = styled.div`
    padding: 1rem var(--padding-tabs) 1.5rem;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    .head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    &:hover{
        background-color: ${props => props.theme.colors.gray.gray5};
    }

    .skills{
        margin: 1rem 0;
    }
`

export default Style;