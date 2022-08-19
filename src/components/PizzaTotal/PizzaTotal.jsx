import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function PizzaTotal(){
    const selectedPizza = useSelector(store => store.selectedPizzas);

    console.log('selected pizza', selectedPizza)

    // const [total, setTotal] = useState(0);
    // console.log('total', total)
    
    return(
        <>
        {/* <h1>test {selectedPizza[0].price}</h1> */}
        {selectedPizza.reduce((acc = 0, pizza) =>
            acc + Number(pizza.price), 0
        )}
        {/* map through this and do SOMETHING to add to previous total. */}
        </>
    )
}

export default PizzaTotal;