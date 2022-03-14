import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {ProblemReducer } from './Store/ProblemReducers';
import App from './App';


const store = createStore(ProblemReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
     <App /> 
     </Provider>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

