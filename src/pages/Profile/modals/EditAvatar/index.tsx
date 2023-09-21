import React from 'react';

import { H4 } from '@/components'
import ImageInput from '@/components/pages/ImageInput';
import { updateAvatar } from '@/pages/api/user';
import { setUser } from '@/redux/features/userSlice';
import IUser from '@/types/user';
import { AppDispatch } from '@/redux/store';

interface IProps {
    user: IUser,
    dispatch: AppDispatch
}

const EditAvatarModal = ({ user, dispatch }: IProps) => {
    const handelAvatarChange = (img: string) => {
        const tempUser: IUser = { ...user, photo: img };
        dispatch(setUser(tempUser))
        updateAvatar(img, user.id);
    }

    return (
        <div>
            <H4 margin="0 0 0.5rem" weight={500}>Upload new avatar image</H4>
            <ImageInput onChange={handelAvatarChange} />
        </div>
    )
}

export default EditAvatarModal