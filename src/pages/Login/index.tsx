import React, { useState, useEffect } from 'react'

// components
import { Button, H1, Divider, InputGroup, CustomLink } from '@/components';

// layout
import AuthPages from '@/layouts/AuthPages';

// hooks
import { useNavigate } from 'react-router-dom';

// validation
import loginSchema from '@/validation/loginSchema';
import { PATHS } from '@/router';

// redux
import { login } from '@/redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

const Login = () => {
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
    })

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({ ...prev, [e.target.name]: { value: e.target.value, error: "" } }))
    }

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginSchema.validate({
            username: data.username.value,
            password: data.password.value,
        }, { abortEarly: false }).then(async () => {
            const isSuccess: boolean = await dispatch(login(data.username.value, data.password.value));
            if (!isSuccess) {
                setData(prev => ({
                    username: { ...prev.username, error: "Wrong username" },
                    password: { ...prev.password, error: "Wrong password" },
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
                <Button fullWidth>Login</Button>
            </form>
            <Divider>Or</Divider>
            <CustomLink to="SIGN_UP">
                <Button variant='outlined' fullWidth>
                    don't have an account? Login
                </Button>
            </CustomLink>
        </AuthPages>
    )
}

export default Login