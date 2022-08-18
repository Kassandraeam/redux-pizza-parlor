import {useSelector} from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';

function PizzaList() {

    //ASKING STORE FOR THE PIZZA LIST
    const pizzaList = useSelector(store => store.pizzaList);

    return(
        <>
            <h3>Pizza List goes here...</h3>
            <ul>
                {pizzaList.map((pizza) => 
                    <PizzaItem key={pizza.id} pizza={pizza}/>
                )}
            </ul>
        </>
    )
}

export default PizzaList;