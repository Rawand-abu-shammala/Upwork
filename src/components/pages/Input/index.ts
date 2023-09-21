import React from 'react';
import styled from 'styled-components';

interface IProps {
    fullWidth?: boolean,
    hasError?: boolean,
    margin?: string,
}

const Input = styled.input<IProps>`
    ${props => props.fullWidth ? "width:100%;" : ""};
    margin:${props => props.margin ? props.margin : "0"};
    
    padding: 2px 15px;
    outline: none;
    line-height: 40px;
    border:${props => props.theme.border.form};
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;

    transition: ${props => props.theme.transition.main};
    ${props => props.hasError ? `border-color: ${props.theme.colors.danger};color:${props.theme.colors.danger};` : ""};

    &:focus , &:hover{
        border-color:${props => props.hasError ? props.theme.colors.danger : props.theme.colors.primary.main};
    }

    &::placeholder{
        border-color:${props => props.hasError ? props.theme.colors.danger : props.theme.colors.primary.main};
    }

`;

export default Input;
