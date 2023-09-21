import styled from "styled-components";

const Style = styled.div`
    .title{
        padding: 0 var(--padding-tabs);
    }
`

export const StyleEmpty = styled.div`
    display: flex;
    align-items: center;
    padding: var(--padding-tabs);
    flex-direction: column;
    img{
        width: 25%;
    }
`

export default Style;