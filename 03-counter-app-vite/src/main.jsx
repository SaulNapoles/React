import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWordApp';
import {FirstApp} from './FirstApp'
// import App from './HelloWordApp';
// import {App} from './HelloWordApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
)