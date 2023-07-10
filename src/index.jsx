import React from 'react';
import { createRoot } from 'react-dom/client';

import "@styles/main.scss";

import { App } from '@components/App';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
    <React.StrictMode>
        <App name="Alex" />
    </React.StrictMode>
);
