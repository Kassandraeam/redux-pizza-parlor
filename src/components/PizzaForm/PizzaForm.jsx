import { useState } from "react";
import { useDispatch } from 'react-redux';
import PizzaTotal from "../PizzaTotal/PizzaTotal";
import {useHistory} from 'react-router-dom';


function PizzaForm() {

    const dispatch = useDispatch();

    const history = useHistory();

    let [customerToAdd, setCustomerToAdd] = useState({ customer_name: '', street_address: '', city: '', zip: '', type: '' });

    const customer_name = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            customer_name: event.target.value
        })
    }
    const street_address = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            street_address: event.target.value
        })
    }
    const city = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            city: event.target.value
        })
    }
    const zip = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            zip: event.target.value
        })
    }
    const type = (event) => {
        setCustomerToAdd({
            ...customerToAdd,
            type: event.target.value
        })
    }

    const addCustomer = (event) => {
        event.preventDefault();
        console.log(customerToAdd);
        dispatch({
            type: 'ADD_INFO',
            payload: customerToAdd
        })
        //history push to the next page
        history.push('/checkout')
    }

    return (
        <>
            <h3>Step 2: Customer Information</h3>
            <PizzaTotal/>
            <form onSubmit={(event) => addCustomer(event)}>

                <input
                    placeholder="Name"
                    onChange={customer_name}
                />
                <input
                    placeholder="Street"
                    onChange={street_address}
                />
                <input
                    placeholder="City"
                    onChange={city}
                />
                <input
                    placeholder="Zip"
                    onChange={zip}
                />

                <input type="radio" name="type" value="Pickup" onChange={type} /> Pickup
                <input type="radio" name="type" value="Delivery" onChange={type} /> Delivery

                <button>NEXT</button>


            </form>
        </>
    )
}

export default PizzaForm;

/* Task list:

- We dispatch this info to index.

1) Get and 'save' information from name, street, city, zip, and radio button. 


*/


/*
Save the info that we get from the inputs to the store (via Dispatch)
Save it as a variable dispatch to Store.

Writing something that can capture inputs.
onSubmit & onChange
event, and event.preventDefault b/c we're using form.
*/

/* ISSUES:
- Can select both of the radio buttons.

*/

