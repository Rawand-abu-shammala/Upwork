import styled from "styled-components";

const Style = styled.div`
    border: ${props => props.theme.border.base};
    --padding-tabs:1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    .tabs_head{
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        padding: var(--padding-tabs);

        .tabs_head_item{
            border: none;
            outline: none;
            background-color: transparent;
            cursor: pointer;
            text-transform: capitalize;
            border-bottom:2px solid transparent;

            transition: 0.3s all ease-in-out ;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            font-weight: 500;
            color:${props => props.theme.colors.gray.gray2};
            &.active{
                border-bottom-color:${props => props.theme.colors.primary.primary200};
                color:${props => props.theme.colors.primary.primary200};
            }
        }
    }
`

export default Style;