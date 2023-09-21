import React, { useState } from 'react';

import { Body1, Button, H4, Input } from '@/components'
import ImageInput from '@/components/pages/ImageInput';
import { addToPortfolio } from '@/pages/api/user';
import { setUser } from '@/redux/features/userSlice';
import IUser from '@/types/user';
import { AppDispatch } from '@/redux/store';
import Style from './style';

interface IProps {
    user: IUser,
    dispatch: AppDispatch,
    close: () => void
}

const AddToPortfolioModal = ({ user, dispatch, close }: IProps) => {
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");

    const handelAvatarChange = (img: string) => {
        setImg(img)
    }

    const handelAdd = () => {
        if (img && desc) {
            close();
            const tempUser: IUser = {
                ...user, portfolio: [...user.portfolio, {
                    image: img,
                    description: desc
                }]
            };
            dispatch(setUser(tempUser))
            addToPortfolio(img, desc, user.id);
        }
    }

    return (
        <Style>
            <H4 margin="0 0 0.5rem" weight={500}>Add to your portfolio</H4>
            <Body1 margin="0 0 0.5rem" weight={500}>project image</Body1>
            <ImageInput onChange={handelAvatarChange} />

            <Body1 margin="1rem 0 0.5rem" weight={500}>project title</Body1>
            <Input
                className="input"
                value={desc}
                placeholder="project title"
                onChange={(e) => { setDesc(e.target.value) }} />
            <div className="button">
                <Button onClick={handelAdd}>ADD</Button>
            </div>
        </Style>
    )
}

export default AddToPortfolioModal