import React, { useState } from 'react';

import { Body1, Button, H4, Input } from '@/components'
import { updateHourlyRate} from '@/pages/api/user';
import { setUser } from '@/redux/features/userSlice';
import IUser from '@/types/user';
import { AppDispatch } from '@/redux/store';
import Style from './style';

interface IProps {
    user: IUser,
    dispatch: AppDispatch,
    close: () => void
}

const EditHourlyRateModal = ({ user, dispatch, close }: IProps) => {
    const [value, setValue] = useState(user.hourly_rate)

    const handelSave = () => {
        if (value) {
            const tempUser: IUser = { ...user, hourly_rate: value };
            dispatch(setUser(tempUser))
            updateHourlyRate(value, user.id);
        }
        close();
    }

    const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (parseInt(e.target.value)) {
            setValue(parseInt(e.target.value))
        }
    }

    return (
        <Style>
            <H4 weight={500}>Change hourly rate</H4>
            <Body1 margin="0.5rem 0">Please note that your new hourly rate will only apply to new contracts.</Body1>
            <Body1 margin="0 0 3px">The Upwork Service Fee is 20% when you begin a contract with a new client.</Body1>
            <Body1 weight={500} margin="0 0 0.5rem">Your profile rate: ${user.hourly_rate}.00/hr</Body1>
            <div className='rate_input_container'>
                <Body1 weight={500}>Hourly Rate</Body1>
                <Input className='input' value={value} onChange={handelInputChange} />
            </div>
            <div className='rate_input_container'>
                <Body1 weight={500}>20% Upwork Service Fee</Body1>
                <Input disabled className='input' value={value * 0.2} onChange={handelInputChange} />
            </div>

            <div className='rate_input_container'>
                <Body1 weight={500}>You'll Receive</Body1>
                <Input disabled className='input' value={value * 0.8} onChange={handelInputChange} />
            </div>
            <div className="button">
                <Button onClick={handelSave}>SAVE</Button>
            </div>
        </Style>
    )
}

export default EditHourlyRateModal