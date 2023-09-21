import React, { useState } from 'react';

import { Body1, Button, H4, Input } from '@/components'
import { updateJobTitle } from '@/pages/api/user';
import { setUser } from '@/redux/features/userSlice';
import IUser from '@/types/user';
import { AppDispatch } from '@/redux/store';
import Style from './style';

interface IProps {
    user: IUser,
    dispatch: AppDispatch,
    close: () => void
}

const EditJobTitleModal = ({ user, dispatch, close }: IProps) => {
    const [value, setValue] = useState(user.job_title)

    const handelSave = () => {
        if (value) {
            const tempUser: IUser = { ...user, job_title: value };
            dispatch(setUser(tempUser))
            updateJobTitle(value, user.id);
        }
        close();
    }

    return (
        <Style>
            <H4 weight={500}>Your title</H4>
            <Body1 margin="0.5rem 0">Enter a single sentence description of your skills/experience</Body1>
            <Input className='input' value={value} onChange={(e) => { setValue(e.target.value) }} />
            <div className="button">
                <Button onClick={handelSave}>SAVE</Button>
            </div>
        </Style>
    )
}

export default EditJobTitleModal