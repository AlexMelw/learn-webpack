import React from "react";

import { useLoginForm } from "@hooks/useLoginForm";

const LoginForm = () => {

    const {
        login,
        password,
        handleLoginChange,
        handlePasswordChange,
        handleLoginBtnClick,
        containerRef,
    } = useLoginForm();

    return (

        <div className="container" ref={containerRef}>

            <div
                data-test-id='login-form'
                style={{
                    marginTop: '2.625rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>

                <input
                    type='text'
                    placeholder='Login'
                    value={login}
                    onChange={handleLoginChange}
                    style={{
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        padding: '0.625rem',
                        marginBottom: '0.625rem',
                        borderRadius: '0.3125rem',
                        border: 'none',
                        boxShadow: '0px 0px 0.3125rem rgba(0, 0, 0, 0.2)'
                    }}
                />

                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                    style={{
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        padding: '0.625rem',
                        marginBottom: '0.625rem',
                        borderRadius: '0.3125rem',
                        border: 'none',
                        boxShadow: '0px 0px 0.3125rem rgba(0, 0, 0, 0.2)'
                    }}
                />

                <button
                    onClick={handleLoginBtnClick}
                    style={{
                        minWidth: '19.7rem',
                        marginTop: '0.625rem',
                        fontSize: '1.5rem',
                        padding: '0.625rem',
                        borderRadius: '0.3125rem',
                        border: 'none',
                        backgroundColor: '#007899',
                        color: '#C6FF00',
                        cursor: 'pointer',
                        boxShadow: '0px 0px 0.3125rem rgba(0, 0, 0, 0.2)'
                    }}
                >
                    Login
                </button>
            </div >
        </div>
    )
};

export { LoginForm }
