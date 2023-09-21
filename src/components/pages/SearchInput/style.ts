import styled from "styled-components";

const Style = styled.div`
    margin-bottom: 1.5rem;
    .search_box{
        height: 2.5rem;
        display: flex;
        input{
            border-radius: unset;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }

        .search_btn{
            margin: unset;
            border-radius: unset;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
        }
    }

    .recent_search{
        margin-top: 0.5rem;
    }
`

export default Style;