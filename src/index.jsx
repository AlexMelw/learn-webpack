import React from 'react';
import ReactDOMClient from 'react-dom/client';

import "@styles/main.scss";

import { App } from '@components/App';
import { UserProvider } from '@contexts/userContext';

const rootElement = document.getElementById('root');

ReactDOMClient.createRoot(rootElement)
    .render(
        <React.StrictMode>
            <UserProvider>
                <App name="Alex" />
            </UserProvider>
        </React.StrictMode>
    );
