import React, { Component } from 'react';
import {Container, Row, Col,Card } from 'react-bootstrap'
const Brandslist =[
    {name:"Burberry",url: require("../../assests/brands/Burberry.png")},
    {name:"Carrera",url: require("../../assests/brands/Carrera.png")},
    {name:"Gucci",url: require("../../assests/brands/gucci-sunglasses.png")},
    {name:"Oakley",url: require("../../assests/brands/oakley.png")},
    {name:"Persol",url: require("../../assests/brands/persol.png")},
    {name:"Polaroid",url: require("../../assests/brands/polaroid.png")},
    {name:"Police",url: require("../../assests/brands/Police.png")},
    {name:"Ray-Ban",url: require("../../assests/brands/ray-ban-sunglasses.png")},
    {name:"Versace",url: require("../../assests/brands/unnamed.png")}
]
class Brands extends Component {

    render() {
        return (
            <Container className="mb-5">
                <Row>
                    <Col md="12">
                        <h2>
                            Brands
                        </h2>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    {
                       Brandslist.map(object =>
                        
                        <Col md="4 my-2 px-2">
                            <Card className="withShadow1">
                                <Card.Body>
                                <img src={object.url} style={{height:"100px"}}/>
                                <h3>{object.name}</h3>
                                </Card.Body>
                            </Card>
                            
                        </Col>
                       ) 
                    }
                   
                </Row>
            </Container>
        );
    }
}

export default Brands;