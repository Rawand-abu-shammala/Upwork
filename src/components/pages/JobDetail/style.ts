import styled from "styled-components";

const Style = styled.div`
    padding: 0 var(--padding-tabs) ;
    
    .head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        padding-inline-start: 4rem;
    }

    .skills{
        margin: 0.5rem 0;
    }

    .body_section{
        margin-bottom: 1rem;
    }

    .body{
        width: 70%;
        padding-inline-start: 4rem;
    }
`

export default Style;