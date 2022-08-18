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

//GET PIZZA REDUCER
const pizzaList = (state = [], action) => {
    if(action.type === 'SET_PIZZAS'){
        return action.payload;
    }
    return state;
}

//SELECTED PIZZAS REDUCER
const selectedPizzas = (state = [], action) => {
    if(action.type === 'ADD_PIZZAS'){
        return [...state, action.payload]
    }
    return state;
}



const store = createStore(
    combineReducers({
        //REDUCERS GO HERE
        pizzaList,
        selectedPizzas
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

