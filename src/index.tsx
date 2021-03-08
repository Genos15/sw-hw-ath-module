import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './config';
import 'carbon-components/css/carbon-components.min.css';
import i18n from "i18next";
import {I18nextProvider} from "react-i18next";
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
