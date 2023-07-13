import React, { Suspense, lazy } from 'react';

import { useLoginForm } from '@hooks/useLoginForm';
import { Loading } from '@components/Loading';
import { CursorPointLoggerWithCursorPosition } from '@components/CursorPointLogger';
import { UserDetailsDataFetcher } from '@components/UserDetailsDataFetcher';

// Do not declare lazy components inside other components
// instead always declare them at the top level of the module
const Announcement = lazy(() => new Promise(resolve => {
    setTimeout(() => {
        const promise = import('../Announcement/Default');
        resolve(promise);
    }, 3000);
}));

export const App = ({ name }) => {

    const {
        login,
        password,
        handleLoginChange,
        handlePasswordChange,
        handleLoginBtnClick,
        containerRef,
        user,
    } = useLoginForm();

    return (
        <div
            ref={containerRef}
            style={{
                maxWidth: '50rem',
                minHeight: '50rem',
                margin: 'auto',
                position: 'relative',
                marginTop: '50vh',
                transform: 'translateY(-50%)',
                background: 'linear-gradient(159deg, #C6FF00, #007899)',
                borderRadius: '0.3125rem',
                padding: '.75rem',
                display: 'flex',
            }}>
            <div style={{
                flex: '1 0 auto',
                background: 'linear-gradient(to right, #58d8dc, #9afba0)',
                paddingTop: '3.225rem',
            }}>
                {user && user.auth && <p style={{
                    textAlign: 'center',
                    color: '#007899',
                    fontWeight: 'bold',
                }}>
                    User {user.name} is authenticated
                </p>}

                <h2 className='lime-text'
                    style={{
                        textAlign: 'center',
                        margin: '0',
                        marginTop: '9.5rem',
                    }}>
                    Hello, <span className='breeze-text'>{name}</span>!
                </h2>

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

                <Suspense fallback={<Loading />}>
                    <Announcement />
                </Suspense>

                <CursorPointLoggerWithCursorPosition
                    overrideStyles={{
                        color: 'rgb(13, 135, 139)',
                    }} />

                {/* <UserDetailsDataFetcher userId={1}
                    render={(data) => (
                        <div>
                            <p>Name: {data.name}</p>
                            <p>Username: {data.username}</p>
                            <p>Email: {data.email}</p>
                        </div>
                    )} /> */}
            </div>

        </div>
    );
}
