import styled from "styled-components";

const Style = styled.div`
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
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .content{
        padding: 15px;
        width: 70%;
        max-width: 600px;
        background-color: #fff;
        cursor: auto;
        border-radius: 7px;
    }
`

export default Style;