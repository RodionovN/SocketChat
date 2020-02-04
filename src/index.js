import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './components/app';
import StoreService from './services/service';
import { StoreServiceProvider } from './components/service-context'

import store from './store';

const storeService = new StoreService();

ReactDOM.render(
    <Provider store={store}>
        <StoreServiceProvider value={storeService}>
            <Router>
                <div>
                    <Route>
                        <App></App>
                    </Route>
                </div>
            </Router>
        </StoreServiceProvider>
    </Provider>,
    document.getElementById('root')
);