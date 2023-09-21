import styled from "styled-components";

const Style = styled.div`
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    border: ${props => props.theme.border.base};
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
    .avatar{
        border-radius: 50%;
        width: 200px;
        height: 200px;
        object-fit: cover;
    }

    .link:hover{
        text-decoration: underline;
    }
`

export default Style;