import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
class index extends Component {
    render() {
        return (
            <Container fluid className="m-0 p-0">
                <Row>
                    <Col md="6" className="m-auto" style={{ padding:"0px 10%"}}>
                        <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, </p>
                    </Col>
                    <Col md="6" className="section6Container"></Col>
                </Row>
            </Container>
        );
    }
}

export default index;