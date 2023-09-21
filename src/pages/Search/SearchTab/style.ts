import styled from "styled-components";

const Style = styled.div`
    .search_input_container , .pagination_container , .jobs_found{
        padding: 0 var(--padding-tabs);
    }
    .pagination_container{
        margin-bottom:1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .page_size{
            display: flex;
            align-items: center;
            gap: 1rem;
            width: 50%;
        }
    }

    .no_jobs{
        padding: 3rem var(--padding-tabs);
        text-align: center;
    }
`

export default Style;