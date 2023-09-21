import React, { useState, useEffect } from 'react'
import { Body1, Loading } from '@/components'
import { getMostRecentJobs } from '@/pages/api/jobs';
import Style from './style';
import JobCard from '@/components/pages/JobCard';
import IJob from '@/types/Job';
export interface IProps {
    onJobClick: (jobData: IJob) => void
}

const MostRecent = ({onJobClick }: IProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [jobs, setJobs] = useState<IJob[]>([]);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const jobsData = await getMostRecentJobs();
            setJobs(jobsData);
            setIsLoading(false);
        }

        getData();
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <Style>
            <Body1 weight={500} className='title'>Browse the most recent jobs that match your skills and profile description.</Body1>
            <div className="jobs">
                {jobs.map(el => <JobCard key={el.id} job={el} onClick={onJobClick} />)}
            </div>
        </Style>
    )
}

export default MostRecent