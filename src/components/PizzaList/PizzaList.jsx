import {useSelector} from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import './PizzaList.css'
import {useHistory} from 'react-router-dom';

function PizzaList() {

    //ASKING STORE FOR THE PIZZA LIST
    const pizzaList = useSelector(store => store.pizzaList);

    const history = useHistory();

    const changePage = () => {
        history.push('/customer-info');
    }

    return(
        <>
            <div className='pizza-div'>
                <h3>Step 1: Select your pizzas</h3>
                <ul>
                    {pizzaList.map((pizza) => 
                        <PizzaItem key={pizza.id} pizza={pizza}/>
                    )}
                </ul>
            </div>
            <button onClick={changePage}>Next</button>
        </>
    )
}

export default PizzaList;