import styled from "styled-components";
interface IProps {
    fullWidth?: boolean,
    hasError?: boolean,
    margin?: string,
}

const Style = styled.div<IProps>`
    ${props => props.fullWidth ? "width:100%;" : ""};
    margin:${props => props.margin ? props.margin : "1rem 0 0.5rem"};

    .error::first-letter{
        text-transform: uppercase;
    }
`

export default Style;