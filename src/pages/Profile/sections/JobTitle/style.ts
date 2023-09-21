import styled from "styled-components";

const Style = styled.div`
    margin: 2rem 0;
    .head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }

    .about::first-letter{
        text-transform: uppercase;
    }
`

export default Style;