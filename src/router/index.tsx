import React from 'react'
import { Routes, Route } from 'react-router-dom';

// pages
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Search from '@/pages/Search';
import Profile from '@/pages/Profile';

export const PATHS = {
    HOME: '/',
    LOG_IN: '/login',
    SIGN_UP: '/signup',
    SEARCH: '/search',
    PROFILE: '/profile',
}

const Router = () => {
    return (
        <Routes>
            <Route Component={Signup} path={PATHS.SIGN_UP} />
            <Route Component={Login} path={PATHS.LOG_IN} />
            <Route Component={Home} path={PATHS.HOME} />
            <Route Component={Search} path={PATHS.SEARCH} />
            <Route Component={Profile} path={PATHS.PROFILE} />
        </Routes>
    )
}

export default Router