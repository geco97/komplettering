import React, { Component } from 'react';
import {Container ,Row,Col } from 'react-bootstrap';
import JumbotronHM from '../components/JumbotronHM'
import Brands from '../components/Brands'
import Section3 from '../components/Section3'
import Section5 from '../components/Section5'
import Firstpageproducts from '../components/Firstpageproducts'
class Home extends Component {
    render() {
        return (
            <Container fluid className="m-0 p-0">
                <JumbotronHM/>
                <Brands/>
                <Section3/>
                <Firstpageproducts onAddToCart={this.props.onAddToCart}/>
                <Section5/>
            </Container>
        );
    }
}

export default Home;