import React, { Component } from 'react';
import {Container, Row, Col,Card, Button,InputGroup,FormControl,Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus  } from '@fortawesome/free-solid-svg-icons'
import  {Link } from 'react-router-dom'
class index extends Component {
    onAddToCart=(item)=>{
        this.props.onAddToCart(item)
      }
    render() {
     const   Products = this.props.currentRelated;
     
        return (
                <Container className="mb-5">
                <Row>
                    <Col md="12">
                        <h2>
                            Related
                        </h2>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    {(Products.length >0)?
                       Products.map(object =>
                        
                        <Col md="4 my-2 px-5">
                            <Card className="withShadow">
                                <Card.Body className="text-left pl-5">
                                <img src={object.url} style={{width:"100%"}}/>
                                <Link to={`/Product/`+ object.modele}><h3>{object.name}</h3></Link>
                                <h4>{object.prise} Kr</h4>
                                <p className="text-right">
                                    <Button variant="warning" className="buttonSite"  onClick={()=>this.onAddToCart(object)}><FontAwesomeIcon icon={faCartPlus}/></Button>
                                </p>
                                
                                </Card.Body>
                            </Card>
                            
                        </Col>
                       ) 
                    :""
                }
                </Row>
            </Container>
        );
    }
}

export default index;