import { useState } from 'react';

export const useLoginForm = () => {

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
        alert(`Hi dude\n\nLogin: ${login}\nPassword: ${password}`);
    }

    return {
        login,
        password,
        handleLoginChange,
        handlePasswordChange,
        handleLoginBtnClick,
    }
}
