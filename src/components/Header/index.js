import React, { Component } from 'react';
import {Navbar,Nav,Button,Badge,Modal,Table } from 'react-bootstrap'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faTrash  } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
  handleShow=()=>{
    this.setState({
      show:true
    })
  }
  handleClose=()=>{
    this.setState({
      show:false
    })
  }
  removeFromCart=(item)=>{
    this.props.removeFromCart(item)
  }
  state={
    show:false
  }
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" fixed="top">
  <Link to="/"><Navbar.Brand><h2>GlasÖgon <sup>Butik</sup></h2></Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto ml-auto text-center">
    <Nav.Link><Link to="/">Hemo</Link></Nav.Link>
    <Nav.Link><Link to="/butik">Butik</Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link>
      <Button variant="outline-dark" onClick={this.handleShow}><FontAwesomeIcon icon={faShoppingCart} /><Badge variant="transperant">{this.props.cart.length}</Badge></Button>
      </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover>
          {
            this.props.cart.map(object=>
              <tr>
      <td>{object.name}</td>
      <td>{object.prise} Kr</td>
      <td className="text-center"><Button variant="danger" onClick={()=>this.removeFromCart(object)}><FontAwesomeIcon icon={faTrash}/></Button></td>
    </tr>
              )
          }
          </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </>
        );
    }
}

export default Header;