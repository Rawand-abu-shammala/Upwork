import React from 'react';
import { H3, Body1, H4, Span } from '@/components/pages/Typography';
import SkillItem from '@/components/pages/SkillItem';
import Button from '@/components/pages/Button';
import { MdLocationOn } from 'react-icons/md';
import { FaBrain, FaMoneyBillWave } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen, AiTwotoneExperiment } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { saveJob, unSaveJob } from '@/redux/features/userSlice';
import IJob from '@/types/Job';
import { getPostTimeAgo } from '@/utils/getPostTimeAgo';
import Style from './style';

interface IProps {
    job: IJob,
}

const JobDetail = ({ job }: IProps) => {
    const { savedJobs } = useAppSelector(state => state.user.user);
    const dispatch = useAppDispatch();
    
    const handelLikeButton = () => {
        if (savedJobs.includes(job.id)) {
            dispatch(unSaveJob(job.id))
        } else {
            dispatch(saveJob(job.id))
        }
    }

    return (
        <Style>
            <div className="head">
                <H3 color='primary/200'>{job.title}</H3>
                <Button variant='filled' shape='rounded_large' onClick={handelLikeButton}>
                    {savedJobs.includes(job.id) ? "un save job" : "save job"}
                </Button>
            </div>
            <div className="body">
                <div className="body_section info">
                    <Body1 weight={500} margin='0 0 0.4rem' color='primary/200'>
                        {job.jobTitle}
                    </Body1>
                    <Body1 margin='0 0 0.4rem'>
                        Posted {getPostTimeAgo(job.postTimeStamp)}
                    </Body1>
                    <Body1>
                        <MdLocationOn /> {job.location}
                    </Body1>
                </div>

                <div className="body_section desc">
                    <H4 color='primary/200'>description</H4>
                    <Body1>{job.desc}</Body1>
                </div>

                <div className="body_section level">
                    <H4 color='primary/200'>
                        <FaBrain /> {job.level}
                    </H4>
                    <Body1>
                        {job.levelDesc}
                    </Body1>
                </div>

                <div className="body_section price">
                    <H4 color='primary/200'>
                        <FaMoneyBillWave /> Price
                    </H4>
                    <Body1>
                        {job.priceType === 'Hourly' ? `Hourly: ${job.hourRate?.min} - ${job.hourRate?.max}` : job.priceType}
                    </Body1>
                </div>

                <div className="body_section project_type">
                    <H4 color='primary/200'>Project</H4>
                    <Body1>
                        <Span weight={600} color='primary/200'>
                            <AiOutlineFundProjectionScreen />
                        </Span> project type: {job.projectType}
                    </Body1>
                    <Body1>
                        <Span weight={600} color='primary/200'>
                            <BiTime />
                        </Span>  project type: {job.projectLength}
                    </Body1>
                </div>

                <div className="body_section skills_section">
                    <H4 color='primary/200'>
                        <AiTwotoneExperiment /> Skills
                    </H4>
                    <div className="skills">
                        {job.skills.map(skill => <SkillItem key={skill}>{skill}</SkillItem>)}
                    </div>
                </div>

                <H4 color="primary/200">proposals: {job.proposals}</H4>
            </div>
        </Style>
    )
}

export default JobDetail;
