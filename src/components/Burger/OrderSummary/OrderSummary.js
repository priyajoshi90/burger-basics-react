import React from 'react';
import Aux from '../../../hoc/Hoc';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });
    return (
        <Aux>
            <ul>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{ingredientSummary}</ul>
                <p>Continue to Checkout?</p>
            </ul>
        </Aux>
    );
};

export default OrderSummary;