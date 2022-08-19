import {useDispatch} from 'react-redux';
import './PizzaItem.css';
import {useState} from 'react';

function PizzaItem({pizza}) {

    const dispatch = useDispatch();

    const [isAdded, setIsAdded] = useState(false);

    const handleAdd = () => {
        pizza.quantity = 1; //this makes every pizza have a quantity of 1, later, dont allow more pizzas to be added???
        console.log(pizza)
        dispatch({
            type: 'ADD_PIZZA',
            payload: pizza
        })
        setIsAdded(!isAdded);
        ///////////////////////////////////STOPPED AND WILL PICK UP WITH TERNARY
    }

    const handleRemove = () => {
        dispatch({
            type: 'REMOVE_PIZZA',
            payload: pizza
        })
        setIsAdded(!isAdded);
    }

    console.log(isAdded);
    return(
        <>

            <li><h4>{pizza.name}</h4>{pizza.description}{pizza.price}
                {/* <img src={pizza.image_path}></img> */}
                {isAdded === true ? <button onClick={() => handleRemove()}>Remove from Cart</button> : <button onClick={() => handleAdd()} >Add to Cart</button>}
            </li>
        </>
    )
}

export default PizzaItem;