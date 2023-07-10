import "./styles.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App.jsx';

const rootNode = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootNode);

reactRoot.render(<App name="Alex" />);
