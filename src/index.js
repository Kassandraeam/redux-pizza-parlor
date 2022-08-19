import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {useDispatch} from 'react-redux';


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
    if(action.type === 'ADD_PIZZA'){
        return [...state, action.payload]
    } else if(action.type === 'REMOVE_PIZZA') {
        // remove a pizza with .filter, filter through state, target to remove pizza with its action.payload.id.
    }
    return state;
}

const customer = (state = [], action) => {
    if (action.type === 'ADD_INFO') {
        console.log(action.payload);
        return action.payload
    }
    return state;
}



const store = createStore(
    combineReducers({
        //REDUCERS GO HERE
        pizzaList,
        selectedPizzas,
        customer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

