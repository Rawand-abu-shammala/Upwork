import styled from "styled-components";

const Style = styled.div`
    .divider_line{
        height: 1px;
        width: 100%;
        background-color: ${props => props.theme.colors.primary.primary200};
    }

    .with_text{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:5px;
        .line_start, .line_end{
            flex-grow: 1;
            height: 1px;
            background-color: ${props => props.theme.colors.primary.primary200};
        }

        .content{
            flex-basis: fit-content;
            color: ${props => props.theme.colors.primary.primary200};
        }
    }
`

export default Style;