import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux';
import { PATHS } from '@/router';

const needAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const NeedAuthWrapper: React.FC<P> = (props) => {
        const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
        if (!isLoggedIn) {
            return <Navigate to={PATHS.LOG_IN} />;
        }
        return <WrappedComponent {...props} />;
    };

    return NeedAuthWrapper;
};

export default needAuth;
