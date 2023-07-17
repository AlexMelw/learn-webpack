import React, { Suspense, lazy } from 'react';

import { Loading } from '@components/Loading';
import { CursorPointLoggerWithCursorPosition } from '@components/CursorPointLogger';
// import { UserDetailsDataFetcher } from '@components/UserDetailsDataFetcher';
import { LoginForm } from '@components/LoginForm';
import { useUser } from '@contexts/userContext';

// Do not declare lazy components inside other components
// instead always declare them at the top level of the module
const Announcement = lazy(() => new Promise(resolve => {
    setTimeout(() => {
        const promise = import('../Announcement/Default');
        resolve(promise);
    }, 3000);
}));

export const App = ({ name }) => {

    const { user } = useUser();

    const userAuthenticationConfirmation = user && user.auth &&
        <p style={{ textAlign: 'center', color: '#007899', fontWeight: 'bold' }}>
            User {user.name} is authenticated
        </p>;

    const greeting = <h2 className='lime-text' style={{ textAlign: 'center', margin: '0', marginTop: '9.5rem', }}>
        Hello, <span className='breeze-text'>{name}</span>!
    </h2>;

    return (
        <div style={{
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
                {userAuthenticationConfirmation}

                {greeting}

                <LoginForm />

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
