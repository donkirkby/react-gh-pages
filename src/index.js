import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import CodeBlockApp from './CodeBlockApp';
import * as serviceWorker from './serviceWorker';

const components = {
    App: App,
    CodeBlockApp: CodeBlockApp
}
const SelectedComponent = components[window.reactAppName];

if (SelectedComponent !== undefined) {
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<SelectedComponent />);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
