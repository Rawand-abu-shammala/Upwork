import React from 'react'
import { ContentWithEdit, H4 } from '@/components'
import Style from './style'
import SkillItem from '@/components/pages/SkillItem'

interface IProps {
    skills: string[],
    editSkills: () => void
}

const Skills = ({ skills, editSkills }: IProps) => {
    return (
        <Style>
            <ContentWithEdit onEdit={editSkills}>
                <H4>Skills</H4>
            </ContentWithEdit>
            <div className="skills">
                {skills.map(skill => <SkillItem key={skill}>{skill}</SkillItem>)}
            </div>
        </Style>
    )
}

export default Skills