import {useDispatch} from 'react-redux';
import './PizzaItem.css';
import {useState} from 'react';

function PizzaItem({pizza}) {

    const dispatch = useDispatch();

    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
        console.log(pizza)
        dispatch({
            type: 'ADD_PIZZAS',
            payload: pizza
        })
        ///////////////////////////////////STOPPED AND WILL PICK UP WITH TERNARY
    }

    return(
        <>

            <li><h4>{pizza.name}</h4>{pizza.description}{pizza.price}
                {/* <img src={pizza.image_path}></img> */}
                <button onClick={() => handleClick()} >ADD PIZZA</button>
            </li>
        </>
    )
}

export default PizzaItem;