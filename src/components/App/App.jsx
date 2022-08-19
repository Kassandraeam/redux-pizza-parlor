import React from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList.jsx';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PizzaForm from '../PizzaForm/PizzaForm.jsx';
import Checkout from '../Checkout/Checkout.jsx';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getPizzas();
  }, []);

  //GET REQUEST
  const getPizzas = () => {
    axios.get('/api/pizza')
      .then((response) => {
        console.log(response.data)
        //DISPATCH
        dispatch({
          type: 'SET_PIZZAS',
          payload: (response.data)
        })
      }).catch((err) => {
        console.error(err);
      })
  }



  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        <Route path='/' exact>
          <PizzaList />
        </Route>
        <Route path='/customer-info'>
          <PizzaForm />
        </Route>
        <Route path='/checkout'>
          <Checkout getPizzas={getPizzas}/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
