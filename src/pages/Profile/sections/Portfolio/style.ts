import styled from "styled-components";

const Style = styled.div`
    .head{
        display: flex;
        align-items: center;
        gap: 10px;
        .add_btn{
            font-size: 30px;
            max-width: unset;
            padding: 0;
        }
    }


    .items{
        display: grid;
        grid-template-columns: repeat( 4, 1fr) ;
    }
`

export default Style;