import styled from "styled-components";

const Style = styled.div`
    .close_btn {
        font-size: 24px;
        padding: 10px 0;
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
    }
    
    .closer{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 998;
    }

    .overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        top: 0;
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: flex-end;
        align-items: stretch;
        cursor: pointer;
    }

    .content{
        padding: 15px;
        width: 70%;
        height: 100%;
        background-color: #fff;
        cursor: auto;
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;

        @media (max-width:${props => props.theme.breakpoints.md}){
            width: 100%;
        }
    }
`

export default Style;