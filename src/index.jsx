import React from 'react';
import ReactDOMClient from 'react-dom/client';

import "@styles/main.scss";

import { App } from '@components/App';

const rootElement = document.getElementById('root');

ReactDOMClient.createRoot(rootElement)
    .render(
        <React.StrictMode>
            <App name="Alex" />
        </React.StrictMode>
    );
