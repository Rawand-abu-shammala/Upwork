import React, { useState } from 'react';

import { Body1, Button, H4 } from '@/components'
import {  updateOverview } from '@/pages/api/user';
import { setUser } from '@/redux/features/userSlice';
import IUser from '@/types/user';
import { AppDispatch } from '@/redux/store';
import Style from './style';
import TextArea from '@/components/pages/TextArea';

interface IProps {
    user: IUser,
    dispatch: AppDispatch,
    close: () => void
}

const EditAboutModal = ({ user, dispatch, close }: IProps) => {
    const [value, setValue] = useState(user.overview)

    const handelSave = () => {
        if (value) {
            const tempUser: IUser = { ...user, overview: value };
            dispatch(setUser(tempUser))
            updateOverview(value, user.id);
        }
        close();
    }

    return (
        <Style>
            <H4 weight={500}>Overview</H4>
            <Body1 margin="0.5rem 0">Use this space to show clients you have the skills and experience they're looking for.</Body1>
            <TextArea className='input' value={value} onChange={(e) => { setValue(e.target.value) }} />
            <div className="button">
                <Button onClick={handelSave}>SAVE</Button>
            </div>
        </Style>
    )
}

export default EditAboutModal