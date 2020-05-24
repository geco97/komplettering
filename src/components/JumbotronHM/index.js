import React, { Component } from 'react';
import {Jumbotron,Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class JumbotronHM extends Component {
    render() {
        return (
            <Jumbotron fluid className="JumbHM">
  <Container className="containewithZin ">
    <Row>
      <Col md="4" className="text-left">
      <h2>GlasÖgon <sup>Butik</sup></h2>
    <p className="my-2">
    Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok.
    </p>
    <p className="my-2">
    <Button variant="warning" className="Jbutton">
      <Link to="/butik">toButik</Link>
    </Button>
    </p>
      </Col>
    </Row>
    
  </Container>
</Jumbotron>
        );
    }
}

export default JumbotronHM;