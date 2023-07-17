import React from 'react';
import { useState } from 'react';

import { useUser } from '@contexts/userContext';

export const useLoginForm = () => {

    const containerRef = React.useRef(null);

    const [
        login, 
        setLogin // private
    ] = useState('');

    const [
        password, 
        setPassword // private
    ] = useState('');

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLoginBtnClick = () => {

        if (!login || !password) {
            return false;
        }

        const container = containerRef.current;

        container.parentNode.removeChild(container);

        setUser({
            name: 'Alex',
            auth: true,
        });
    }

    const { user, setUser } = useUser();

    return {
        login,
        password,
        handleLoginChange,
        handlePasswordChange,
        handleLoginBtnClick,
        containerRef,
        user,
    }
}
