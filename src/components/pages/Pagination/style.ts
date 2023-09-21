import styled from "styled-components";

const Style = styled.div`
    display: flex;
    align-items: center;
    span{
        width: 40px;
        height: 40px;
        color: ${props => props.theme.colors.primary.primary200};
        background-color: #fff;
        transition: 0.3s all ease-in-out;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        
        &:hover{
            background-color: ${props => props.theme.colors.gray.gray6};
        }
        &.active{
            background-color: ${props => props.theme.colors.primary.primary200};
            color: #fff;
        }
    }
`

export default Style;