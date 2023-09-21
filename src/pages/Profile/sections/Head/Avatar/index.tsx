import { EditButton } from '@/components'
import React from 'react'
import Style from './style'
interface IProps {
    image: string,
    name: string,
    openModal: () => void
}

const Avatar = ({ image, name, openModal }: IProps) => {
    return (
        <Style>
            <img className="avatar" src={image} alt={name} />
            <EditButton className="edit_avatar" onClick={openModal} />
        </Style>
    )
}

export default Avatar