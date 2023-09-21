import React, { useState } from 'react';

import { Body1, Button, H4, Input } from 'components'
import { updateSkills } from 'api/user';
import { setUser } from 'redux/features/userSlice';
import IUser from 'types/user';
import { AppDispatch } from 'redux/store';
import Style from './style';
import Skill from './Skill';

interface IProps {
    user: IUser,
    dispatch: AppDispatch,
    close: () => void
}

const EditSkillsModal = ({ user, dispatch, close }: IProps) => {
    const [value, setValue] = useState("")

    const handelSave = () => {
        updateSkills(user.skills, user.id);
        close();
    }

    const handelAdd = () => {
        if (value) {
            if (!user.skills.find(el => el === value)) {
                const tempUser: IUser = { ...user, skills: [...user.skills, value] };
                dispatch(setUser(tempUser));
                setValue("");
            }
        }
    }

    const handelDelete = (deleteSkill: string) => {
        const tempUser: IUser = { ...user, skills: user.skills.filter(el => el !== deleteSkill) };
        console.log(tempUser)
        dispatch(setUser(tempUser));
    }

    return (
        <Style>
            <H4 weight={500}>Edit skills</H4>
            <Body1 margin="0.5rem 0">Keeping your skills up to date helps you get the jobs you want.</Body1>
            <div className="skills">
                {user.skills.map(el => <Skill key={el} skill={el} onDelete={() => handelDelete(el)} />)}
            </div>
            <Input className='input' value={value} onChange={(e) => { setValue(e.target.value) }} />
            <div className="button">
                <Button onClick={handelAdd} variant="outlined">ADD</Button>
                <Button onClick={handelSave}>SAVE</Button>
            </div>
        </Style>
    )
}

export default EditSkillsModal