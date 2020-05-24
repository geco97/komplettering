import React, { Component } from 'react';
import JumbotronB from '../components/JumbotronB'
import Butickprosducts from '../components/Butickprosducts'
class Butick extends Component {
    render() {
        return (
            <div>
               <JumbotronB/> 
               <Butickprosducts  onAddToCart={this.props.onAddToCart}/> 
            </div>
        );
    }
}

export default Butick;