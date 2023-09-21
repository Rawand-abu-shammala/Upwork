import React from 'react';
import { H4, Body1, Span } from '@/components/pages/Typography';
import SkillItem from '@/components/pages/SkillItem';
import Button from '@/components/pages/Button';
import { GrLike, GrDislike } from 'react-icons/gr';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { saveJob, unSaveJob } from '@/redux/features/userSlice';
import IJob from '@/types/Job';
import { getPostTimeAgo } from '@/utils/getPostTimeAgo';
import Style from './style';

interface IProps {
    job: IJob,
    onClick: (jobData: IJob) => void,
}

const JobCard = ({ job, onClick }: IProps) => {
    const { savedJobs } = useAppSelector(state => state.user.user);
    const dispatch = useAppDispatch();
    const handelLikeButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (savedJobs.includes(job.id)) {
            dispatch(unSaveJob(job.id))
        } else {
            dispatch(saveJob(job.id))
        }
    }

    return (
        <Style onClick={() => onClick(job)}>
            <div className="head">
                <H4 color='primary/200'>{job.title}</H4>
                <Button variant='outlined' shape='circled' onClick={handelLikeButton}>
                    {savedJobs.includes(job.id) ? <GrDislike /> : <GrLike />}
                </Button>
            </div>
            <div className="body">
                <Body1 margin='0 0 0.5rem'>
                    <Span>
                        {job.priceType === 'Hourly' ? `Hourly: ${job.hourRate?.min} - ${job.hourRate?.max}` : job.priceType}
                    </Span>
                    {" / "}
                    <Span>
                        {job.level}
                    </Span>
                    {" / "}
                    {job.priceType === 'Fixed-price' && <><Span>Est. budget: {job.budget}</Span>{" / "}</>}

                    <Span>Posted {getPostTimeAgo(job.postTimeStamp)}</Span>
                </Body1>
                <Body1>{job.desc}</Body1>
                <div className="skills">
                    {job.skills.map(skill => <SkillItem key={skill}>{skill}</SkillItem>)}
                </div>
                <Body1>proposals: {job.proposals}</Body1>
            </div>
        </Style>
    )
}

export default JobCard;
