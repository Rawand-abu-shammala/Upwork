import React from 'react'
import { Body1, H4 } from '@/components'
import IUser from '@/types/user'
import Style from './style';
import ContentWithEdit from '@/components/pages/ContentWithEdit';

interface IProps {
    user: IUser,
    editJobTitle: () => void,
    editAbout: () => void,
    editHourlyRate: () => void,
}

const JobTitle = ({ user, editJobTitle, editAbout, editHourlyRate }: IProps) => {
    return (
        <Style>
            <div className="head">
                <ContentWithEdit onEdit={editJobTitle}>
                    <H4 weight={600} transform="capitalize">{user.job_title}</H4>
                </ContentWithEdit>

                <ContentWithEdit onEdit={editHourlyRate}>
                    <H4 weight={600} >
                        ${user.hourly_rate}.00 h/r
                    </H4>
                </ContentWithEdit>
            </div>

            <ContentWithEdit onEdit={editAbout}>
                <Body1 margin='0 5rem 0 0' className='about' weight={500}>
                    {user.overview}
                </Body1>
            </ContentWithEdit>
        </Style>
    )
}

export default JobTitle