import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContex';

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return null;
};

export default ResolveAuthScreen;