import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients=[];
        let price=0;
        for(let param of query.entries()){
            if(param[0] === 'price'){
                price=param[1];
            } else{
                 //['salad','1']
                ingredients[param[0]]= +param[1];
            }
        }
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        });
    }
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedhandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedhandler}
                />
                <Route path={this.props.match.path + '/contact-data'} 
                render={(props) => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props}/>)}/>
            </div>
        );
    }
}

export default Checkout;