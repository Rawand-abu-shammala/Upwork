import styled, { css } from "styled-components";
type TVariant = "filled" | "outlined";

const filledStyle = css`
    background-color: ${props => props.theme.colors.primary.main};
    transition: ${props => props.theme.transition.main};
    border: ${props => props.theme.border.form};
    border-color:${props => props.theme.colors.primary.main};

    &:hover{
        background-color: ${props => props.theme.colors.primary.primary200};
        border-color:${props => props.theme.colors.primary.primary200};
    }
`

const outlinedStyle = css`
    color: ${props => props.theme.colors.primary.main};
    border: ${props => props.theme.border.form};
    border-color:${props => props.theme.colors.primary.main};
    transition: ${props => props.theme.transition.main};
    background-color: #fff;
    
    &:hover{
        background-color: ${props => props.theme.colors.gray.gray6};
    }
`
type TShape = "rounded_small" | "rounded_large" | "circled";

const circledStyled = css`
    min-width: 40px;
    aspect-ratio: 1/1;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
interface IProps {
    variant?: TVariant
    fullWidth?: boolean
    shape?: TShape
    margin?: string
}

const Button = styled.button<IProps>`
    outline: none;
    margin:${props => props.margin ? props.margin : "0.5rem 0"};
    padding: 0.5rem 1rem ;
    color: white;
    font-size: 1rem;
    font-weight:500;
    cursor: pointer;

    ${props => props.variant === 'outlined' ? outlinedStyle : filledStyle};
    ${props => props.fullWidth ? "width:100%;" : ""};
    ${props => props.shape === 'circled' ? circledStyled :
        props.shape === 'rounded_large' ?
            "border-radius: 25px;" :
            "border-radius: 10px;"};
`

export default Button;