import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import Style from './style'
interface IProps {
    skill: string,
    onDelete: () => void
}
const Skill = ({ skill, onDelete }: IProps) => {
    return (
        <Style>
            {skill}
            <AiFillCloseCircle onClick={onDelete} />
        </Style>
    )
}

export default Skill