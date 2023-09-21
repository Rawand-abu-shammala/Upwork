


import React, { useState, useEffect } from 'react'
import { PATHS } from '@/router';

// components
import { Button, H1, Divider, InputGroup, CustomLink } from '@/components';

// layout
import AuthPages from '@/layouts/AuthPages';

// hooks
import { useNavigate } from 'react-router-dom';

// validation
import signupSchema from '@/validation/signupSchema';

// redux
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { signup } from '@/redux/features/userSlice';

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
    useEffect(() => {
        if (isLoggedIn) {
            navigate(PATHS.HOME)
        }
    }, [isLoggedIn, navigate])

    const [data, setData] = useState({
        username: { value: "", error: "" },
        password: { value: "", error: "" },
        passwordConfirmation: { value: "", error: "" },
    })

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({ ...prev, [e.target.name]: { value: e.target.value, error: "" } }))
    }

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signupSchema.validate({
            username: data.username.value,
            password: data.password.value,
            passwordConfirmation: data.passwordConfirmation.value,
        }, { abortEarly: false }).then(async () => {
            const isSuccess: boolean = await dispatch(signup(data.username.value, data.password.value));
            if (!isSuccess) {
                setData(prev => ({
                    ...prev,
                    username: { ...prev.username, error: "something went wrong" },
                }))
            }
        }).catch(err => {
            const tempData = { ...data };
            // @ts-ignore
            err.inner.forEach(({ message, params }) => { tempData[params.path].error = message; });
            setData({ ...tempData });
        })
    }

    return (
        <AuthPages>
            <H1 align='center' margin="0 0 1rem" weight={600}>Log in to Upwork</H1>
            <form onSubmit={handelSubmit}>
                <InputGroup
                    label='Username'
                    fullWidth
                    onChange={handelChange}
                    name="username"
                    value={data.username.value}
                    error={data.username.error}
                />
                <InputGroup
                    label='Password'
                    fullWidth
                    onChange={handelChange}
                    name="password"
                    type='password'
                    value={data.password.value}
                    error={data.password.error}
                />
                <InputGroup
                    label='Confirm password'
                    fullWidth
                    onChange={handelChange}
                    type='password'
                    name="passwordConfirmation"
                    value={data.passwordConfirmation.value}
                    error={data.passwordConfirmation.error}
                />
                <Button fullWidth>Sign up</Button>
            </form>
            <Divider>Or</Divider>
            <CustomLink to="LOG_IN">
                <Button variant='outlined' fullWidth>
                    Already have an account? Login
                </Button>
            </CustomLink>
        </AuthPages>
    )
}

export default Signup
