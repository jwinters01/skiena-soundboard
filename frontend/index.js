import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

import './assets/stylesheets/base.scss';

const store = configureStore();

render(
    <App />,
    document.getElementById('root')
);
