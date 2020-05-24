import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Product from './pages/Product'
import Butick from './pages/Butick'
import Header from './components/Header'
import Footer from './components/Footer'
class App extends Component {
  state={
    cart:[]
  }
  onAddToCart= (item)=>{
    let ncart = this.state.cart;
    ncart.push(item);
    this.setState({
      cart:ncart
    })
  }
  removeFromCart=(item)=>{
    this.setState({cart: this.state.cart.filter(function(object) { 
      return object !== item
  })});
  }
  render() {
  return ( <Router>
    <div className="App">
      <Header cart={this.state.cart} removeFromCart={this.removeFromCart}/>
     
     <Switch>
     <Route exact path='/butik' >
       <Butick  onAddToCart={this.onAddToCart}/>
       </Route>
     <Route exact path='/Product/:name' component={(props) => <Product {...props} onAddToCart={this.onAddToCart}/>}/>
     <Route exact path='/'>
       <Home  onAddToCart={this.onAddToCart}/>
       </Route>
          <Route
          render={function() {
            return <h1>Not Found</h1>;
          }} 
        />
        </Switch>
      <Footer/>
    </div>
    </Router>
  );
}
}
export default App;
