import { Body1, H2 } from '@/components'
import Avatar from '@/pages/Profile/sections/Head/Avatar'
import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import IUser from '@/types/user'
import Style from './Style'
interface IProps {
    user: IUser,
    editAvatar: () => void
}
const Head = ({ user, editAvatar }: IProps) => {
    return (
        <Style>
            <Avatar
                image={user.photo}
                name={user.username}
                openModal={editAvatar}
            />

            <div className="info">
                <H2 margin="0 0 4px 4px" weight={600} transform='capitalize'>@{user.username}</H2>
                <Body1 color="primary/200" weight={500}><MdLocationOn />{user.location} - {new Date().getHours()}: {new Date().getMinutes()} local time</Body1>
            </div>
        </Style>
    )
}

export default Head