import { useState } from 'react';

export const useLoginForm = () => {

    const [
        login, // to be exported
        setLogin // private
    ] = useState('');

    const [
        password, // to be exported
        setPassword // private
    ] = useState('');

    // to be exported
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
