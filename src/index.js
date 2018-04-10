import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import './index.scss';

import App from './components/container/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
        <App />
    </Router>, document.getElementById('root'));

registerServiceWorker();
