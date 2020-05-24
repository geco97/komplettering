import React, { Component } from 'react';
import {Container, Row, Col,Card, Button,InputGroup,FormControl,Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus  } from '@fortawesome/free-solid-svg-icons'

class index extends Component {
    state={
        Amount:0
    }
    handleChange=(e)=>{
        this.setState({
            Amount:e.target.value
        })
    }
    onAddToCart=(item)=>{
        this.props.onAddToCart(item)
      }
    render() {
        let {Amount} = this.state;
        const {currentItem} =this.props
        return (
            <>
            <Container className="mb-5">
            <Row>
                <Col md="12">
                    <h2>
                         {currentItem.name}
                    </h2>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <img src={currentItem.url} style={{width:"100%"}}/>
                </Col>
                <Col md="6">
                <h3>
                         {currentItem.name}
                    </h3>
                    <hr/>
        <h5 className="text-left mb-2">Model: {currentItem.modele}</h5> 
        <h5 className="text-left mb-2">Price: {currentItem.prise} Kr</h5> 
        <h5 className="text-left mb-2">Amount:  <Form.Control
                type="number"
                style={{width:"100px",display:"inline"}}
                name="Amount"
                value={Amount}
                min="0"
                max="10"
                onChange={this.handleChange}
              /> St</h5> 
        <Button variant="warning" className="Jbutton" style={{position: "relative",top: "100px"}} onClick={()=>this.onAddToCart(currentItem)}>Add to cart <FontAwesomeIcon icon={faCartPlus}/></Button>
                </Col>
            </Row>
            </Container>
            <hr/>
            <Container style={{marginBottom:"100px"}}>
                <Row>
                    <Col className="text-left">
                    <h4>Description:</h4>
                <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
                </p>
                    </Col>
                </Row>
               
            </Container>
            </>
        );
    }
}

export default index;