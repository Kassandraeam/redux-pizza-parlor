import './Checkout.css';
import {useSelector} from 'react-redux';
import axios from 'axios';

function Checkout({getPizzas}) {

    const pizzaList = useSelector(store => store.selectedPizzas);
    const customerInfo = useSelector( store => store.customer );

    const checkout = () => {
        axios({
            method: 'POST',
            url: '/api/order',
            data: 
            {
                "customer_name": customerInfo.customer_name,
                "street_address": customerInfo.street_address,
                "city": customerInfo.city,
                "zip": customerInfo.zip,
                "total": 23,
                "type": customerInfo.type,
                "pizzas": pizzaList
              }
        }).then((response) => {
            console.log(response);
            getPizzas();
        }).catch((err) => {
            console.error(err);
        })
    }

    return(
        <>
        <h3>Step 3: Checkout</h3>
        <div>
            <p>{customerInfo.customer_name} {customerInfo.street_address} {customerInfo.city} {customerInfo.zip} {customerInfo.type}</p>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                    {pizzaList.map((pizza) => 
                        <tr key={pizza.id}>
                            <td>{pizza.name}</td>
                            <td>{pizza.price}</td>
                        </tr>
                    )}
            </tbody>
        </table>
        <button onClick={checkout}>Checkout</button>
        </>
    )
}

export default Checkout;