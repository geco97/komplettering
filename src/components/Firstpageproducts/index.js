import React, { Component } from 'react';
import {Container, Row, Col,Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus  } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
const FristpageProducts =[
    {name:"Gucci",modele:'GG0148S',url: require("../../assests/Products/Gucci/GG0148S/img1.jpg"),prise:"7800"},
    {name:"Versace",modele:'VE2212',url: require("../../assests/Products/versace/VE2212/img1.jpg"),prise:"1800"},
    {name:"Ray-Ban",modele:'RB4419',url: require("../../assests/Products/Ray ban/RB4419/img1.jpg"),prise:"1000"},
    {name:"Burberry",modele:'BE3108',url: require("../../assests/Products/Burberry/BE3108/img2.jpg"),prise:"4500"},
    {name:"Carrera",modele:'SHE797',url: require("../../assests/Products/Carrera/SHE797/img1.jpg"),prise:"3000"},
    {name:"Oakley",modele:'Holbrook Mix',url: require("../../assests/Products/Oakley/Holbrook Mix/img1.jpg"),prise:"2500"},
    {name:"Persol",modele:'PO3230S',url: require("../../assests/Products/Persol/PO3230S/img1.jpg"),prise:"1000"},
    {name:"Polaroid",modele:'PLD 4048',url: require("../../assests/Products/Polaroid/PLD 4048/img1.jpg"),prise:"1200"},
    {name:"Police",modele:'SPL642',url: require("../../assests/Products/Police/SPL642/img1.jpg"),prise:"3000"}
    
]

class index extends Component {
    onAddToCart=(item)=>{
      this.props.onAddToCart(item)
    }
    render() {
        return (
            <Container className="mb-5">
            <Row>
                <Col md="12">
                    <h2>
                        Products
                    </h2>
                    <hr/>
                </Col>
            </Row>
            <Row>
                {
                   FristpageProducts.map(object =>
                    
                    <Col md="4 my-2 px-5">
                        <Card className="withShadow">
                            <Card.Body className="text-left pl-5">
                            <img src={object.url} style={{width:"100%"}}/>
                            <Link to={`/Product/`+ object.modele}><h3>{object.name}</h3></Link>
                            <h4>{object.prise} Kr</h4>
                            <p className="text-right">
                                <Button variant="warning" className="buttonSite" onClick={()=>this.onAddToCart(object)} ><FontAwesomeIcon icon={faCartPlus}/></Button>
                            </p>
                            
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

export default index;