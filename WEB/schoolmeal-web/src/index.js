import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import stores from './stores';
import Root from './Root';

ReactDOM.render(
    <Provider store={stores}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();