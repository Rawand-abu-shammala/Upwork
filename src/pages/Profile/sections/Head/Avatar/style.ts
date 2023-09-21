import styled from "styled-components";

const Style = styled.div`
    position: relative;
    .avatar{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
    }

    .edit_avatar{
        position: absolute;
        top: 0px;
        inset-inline-start:-10px;
    }
`

export default Style;