import React from 'react';
import ReactDOM from 'react-dom/client';  // Обратите внимание на использование createRoot в React 18
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
