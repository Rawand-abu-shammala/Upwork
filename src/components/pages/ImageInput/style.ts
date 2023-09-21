import styled from "styled-components";

const Style = styled.div`
    height: 300px;
    .upload_input, .upload_image{
        width: 100%;
        height: 100%;
    }

    .upload_input{
        background-color: ${props => props.theme.colors.gray.gray5};
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        text-align: center;
    }
    .upload_image{
        object-fit: cover;
        object-position: center center;
    }
`

export default Style;