import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';


//reducers here

// ReactDOM.render(<App />, document.getElementById('root'));
// =======
const store = createStore(
    combineReducers({
        //REDUCERS GO HERE
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

