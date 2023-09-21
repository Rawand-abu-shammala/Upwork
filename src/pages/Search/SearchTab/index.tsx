import { searchInJobs } from '@/pages/api/jobs';
import { Body1, H4, Loading, Span } from '@/components';
import JobCard from '@/components/pages/JobCard';
import Pagination from '@/components/pages/Pagination';
import SearchInput from '@/components/pages/SearchInput';
import Select from '@/components/pages/Select';
import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import IJob from '@/types/Job';
import Style from './style'

const SearchTab = ({ onJobClick }: { onJobClick: (job: IJob) => void }) => {
    const { search } = useLocation();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [jobs, setJobs] = useState<IJob[]>([]);
    const [resultsCount, setResultsCount] = useState(0);

    const getData = useCallback(async (query: string, page: number, pageSize: number) => {
        setIsLoading(true);
        const { data, resultsCount } = await searchInJobs(query, page, pageSize);
        setJobs(data);
        setResultsCount(resultsCount);
        setIsLoading(false);
    }, [])

    useEffect(() => {
        getData(search.split("=")[1], page, pageSize);
    }, [search, page, getData, pageSize])

    useEffect(() => {
        setPage(1)
    }, [pageSize, resultsCount])

    if (isLoading) {
        return <Loading />
    }

    return (
        <Style>
            <div className="search_input_container">
                <SearchInput />
            </div>
            {resultsCount > 0 &&
                <div className="pagination_container">
                    <div className="page_size">
                        <Body1 transform='capitalize' color='primary/200' weight={500}>page size: </Body1>
                        <Select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                            <option value={5}>
                                5
                            </option>
                            <option value={10}>
                                10
                            </option>
                            <option value={15}>
                                15
                            </option>
                        </Select>
                    </div>
                    <Pagination
                        onPageChange={val => setPage(val)}
                        numberOfPages={Math.ceil(resultsCount / pageSize)}
                        activePageNumber={page} />
                </div>
            }

            {resultsCount > 0 ?
                <>
                    <H4 weight={500} className='jobs_found'>Jobs found: {resultsCount}</H4>
                    {jobs.map(el =>
                        <JobCard key={el.id} job={el} onClick={onJobClick} />
                    )}
                </>
                : <div className='no_jobs'>
                    <H4>There are no results that match your search "<Span color="primary/200">{decodeURIComponent(search.split("=")[1])}</Span>".</H4>
                    <Body1>Please try adjusting your search keywords.</Body1>
                </div>}
        </Style >
    )
}

export default SearchTab