import {useDispatch} from 'react-redux';
import './PizzaItem.css';

function PizzaItem({pizza}) {

    const dispatch = useDispatch();

    const handleAdd = () => {
        console.log(pizza)
        dispatch({
            type: 'ADD_PIZZAS',
            payload: pizza
        })

    }

    return(
        <>
            <h3>pizza item is here...</h3>
            <li>{pizza.name}{pizza.description}{pizza.price}
                <img src={pizza.image_path}></img>
                <button onClick={() => handleAdd()}>ADD PIZZA</button>
            </li>
        </>
    )
}

export default PizzaItem;