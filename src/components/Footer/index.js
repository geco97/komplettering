import React, { Component } from 'react';
import {Container ,Row,Col,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faTwitter  } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render() {
        return (
           <Container fluid >
               <Row className="p-5" style={{ background:"#F2F2F2"}} variant="dark">
                   <Col md="3" className="text-left">
                       <h2>GlasÖgon <sup>Butik</sup></h2>
                       <small>
                       Lorem Ipsum är en  utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. 
Lorem ip
                       </small>
                   </Col>
                   <Col md="3"></Col>
                   <Col md="6" className="text-right  mt-auto">
                        <Button variant="warning" className="mx-1 buttonSite"><FontAwesomeIcon icon={faFacebook}/></Button>
                        <Button variant="warning" className="mx-1 buttonSite"><FontAwesomeIcon icon={faInstagram}/></Button>
                        <Button variant="warning" className="mx-1 buttonSite"><FontAwesomeIcon icon={faTwitter}/></Button>
                   </Col>
               </Row>
           </Container>
        );
    }
}

export default Footer;