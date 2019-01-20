import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "redux/configureStore";

import I18n from "redux-i18n";
import { translations } from "./translations";

import './index.css';
//import App from 'components/App';
import App from './App';
//import 'reset-css';  //css 초기화 모든브라우저별 기본세팅 없애려는 것

console.log( store.getState());
store.dispatch({type: "hello test action"})

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
    <I18n translations={translations} initialLang="en"  fallbackLang="en">
<App />
</I18n>
</ConnectedRouter>
</Provider>
, document.getElementById('root'));

localStorage.setItem("sangmin","good_person")