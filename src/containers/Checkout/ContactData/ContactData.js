import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state={
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({loading: true});
        const order = {
            ingredients:this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Priya Joshi',
                address: {
                    street: 'test street 1',
                    zipcode: '123456',
                    country: 'India'
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then((response) => {
                this.setState({loading: false})
                this.props.history.push('/');
            })
            .catch((error) => this.setState({loading: false}));
    }
    
    render() {
        let form = (
            <form>
                <input type="text" className={classes.Input} name="name" placeholder="Your name"/>
                <input type="email" className={classes.Input} name="email" placeholder="Your email"/>
                <input type="text" className={classes.Input} name="street" placeholder="Your street"/>
                <input type="postal" className={classes.Input} name="postal" placeholder="Postal"/>
                <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
            </form>
        )
        if(this.state.loading)
            form = <Spinner/>
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;