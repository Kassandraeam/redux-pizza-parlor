import React from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList.jsx';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getPizzas();
  }, []);

  //GET REQUEST
  const getPizzas = () => {
    axios.get('/api/pizza')
      .then( (response) => {
        console.log(response.data)
        //DISPATCH
        dispatch({
          type: 'SET_PIZZAS',
          payload: (response.data)
        })
      }).catch( (err) => {
        console.error(err);
      })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <PizzaList />
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
