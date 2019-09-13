import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom';
const routes = (
    <Switch>
      <Route path="/checkout" component={Checkout}></Route>
      <Route path='/' exact component={BurgerBuilder}></Route>
    </Switch>
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
