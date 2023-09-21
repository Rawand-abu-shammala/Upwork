import styled from "styled-components";
interface IProps {
    fullWidth?: boolean,
    hasError?: boolean,
    margin?: string,
}

const TextArea = styled.textarea<IProps>`
    ${props => props.fullWidth ? "width:100%;" : ""};
    margin:${props => props.margin ? props.margin : "0"};
    
    padding: 0.5rem 0.7rem;
    outline: none;
    border:${props => props.theme.border.form};
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    min-height: 150px;

    transition: ${props => props.theme.transition.main};
    ${props => props.hasError ? `border-color: ${props.theme.colors.danger};color:${props.theme.colors.danger};` : ""};

    &:focus , &:hover{
        border-color:${props => props.hasError ? props.theme.colors.danger : props.theme.colors.primary.main};
    }

    &::placeholder{
        border-color:${props => props.hasError ? props.theme.colors.danger : props.theme.colors.primary.main};
    }

`

export default TextArea;