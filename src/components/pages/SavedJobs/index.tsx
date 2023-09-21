import { useState, useEffect } from 'react'
import { H4, Loading } from '@/components'
import { getJobById } from '@/pages/api/jobs';
import Style, { StyleEmpty } from './style';
import JobCard from '@/components/pages/JobCard';
import { useAppSelector } from '@/hooks/redux';
import IJob from '@/types/Job';
export interface IProps {
    onJobClick: (jobData: IJob) => void
}

const SavedJobs = ({ onJobClick }: IProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [jobs, setJobs] = useState<IJob[]>([]);
    const savedJobs = useAppSelector(state => state.user.user.savedJobs);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const jobs: IJob[] = [];
            for (const id of savedJobs) {
                const job = await getJobById(id);
                jobs.push(job);
            }
            setJobs(jobs);
            setIsLoading(false);
        };

        getData();
    }, [savedJobs]);


    if (isLoading) {
        return <Loading />
    }

    if (jobs.length === 0) {
        return <StyleEmpty>
            <img src={"https://cdn-icons-png.flaticon.com/128/7465/7465679.png"} alt="no jobs" />
            <H4 margin="1rem" align='center' color='primary/200'>Keep track of jobs you're interested in. Select the heart icon on a job post to save it for later.</H4>
        </StyleEmpty>
    }
    return (
        <Style>
            <H4 className='title'>Saved Jobs ({savedJobs.length})</H4>
            <div className="jobs">
                {jobs.map(el => <JobCard key={el.id} job={el} onClick={onJobClick} />)}
            </div>
        </Style>
    )
}

export default SavedJobs