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
        const loginForm = containerRef.current.querySelector('[data-test-id="login-form"]');

        loginForm.parentNode.removeChild(loginForm);

        alert(`Hi dude\n\nLogin: ${login}\nPassword: ${password}`);

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
