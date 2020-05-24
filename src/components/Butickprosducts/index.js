import React, { Component } from 'react';
import {Container, Row, Col,Card, Button,InputGroup,FormControl,Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faSearch  } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const FristpageProducts =[
    {name:"Gucci",modele:'GG0148S',url: require("../../assests/Products/Gucci/GG0148S/img1.jpg"),prise:"7800"},
    {name:"Gucci",modele:'GG0715SA',url: require("../../assests/Products/Gucci/GG0715SA/img1.jpg"),prise:"7800"},
    {name:"Gucci",modele:'GG0767S',url: require("../../assests/Products/Gucci/GG0767S/img1.jpg"),prise:"7800"},
    {name:"Versace",modele:'VE2212',url: require("../../assests/Products/versace/VE2212/img1.jpg"),prise:"1800"},
    {name:"Versace",modele:'VE4368',url: require("../../assests/Products/versace/VE4368/img1.jpg"),prise:"1800"},
    {name:"Versace",modele:'VE4373',url: require("../../assests/Products/versace/VE4373/img1.jpg"),prise:"1800"},
    {name:"Ray-Ban",modele:'RB4419',url: require("../../assests/Products/Ray ban/RB4419/img1.jpg"),prise:"1000"},
    {name:"Ray-Ban",modele:'NEw Wayfarer',url: require("../../assests/Products/Ray ban/NEw Wayfarer/img1.jpg"),prise:"1000"},
    {name:"Ray-Ban",modele:'ORB3025',url: require("../../assests/Products/Ray ban/ORB3025/img2.jpg"),prise:"1000"},
    {name:"Burberry",modele:'BE3108',url: require("../../assests/Products/Burberry/BE3108/img2.jpg"),prise:"4500"},
    {name:"Burberry",modele:'BE4253',url: require("../../assests/Products/Burberry/BE4253/img2.jpg"),prise:"4500"},
    {name:"Burberry",modele:'BE4302',url: require("../../assests/Products/Burberry/BE4302/img2.jpg"),prise:"4500"},
    {name:"Carrera",modele:'SHE797',url: require("../../assests/Products/Carrera/SHE797/img1.jpg"),prise:"3000"},
    {name:"Carrera",modele:'182',url: require("../../assests/Products/Carrera/182/img1.jpg"),prise:"3000"},
    {name:"Carrera",modele:'5043',url: require("../../assests/Products/Carrera/5043/img1.jpg"),prise:"3000"},
    {name:"Oakley",modele:'Top Knot',url: require("../../assests/Products/Oakley/Top Knot/img1.jpg"),prise:"2500"},
    {name:"Oakley",modele:'Square Wire',url: require("../../assests/Products/Oakley/Square Wire/img1.jpg"),prise:"2500"},
    {name:"Oakley",modele:'Holbrook Mix',url: require("../../assests/Products/Oakley/Holbrook Mix/img1.jpg"),prise:"2500"},
    {name:"Persol",modele:'PO3186S',url: require("../../assests/Products/Persol/PO3186S/img1.jpg"),prise:"1000"},
    {name:"Persol",modele:'PO3172S',url: require("../../assests/Products/Persol/PO3172S/img1.jpg"),prise:"1000"},
    {name:"Persol",modele:'PO3230S',url: require("../../assests/Products/Persol/PO3230S/img1.jpg"),prise:"1000"},
    {name:"Polaroid",modele:'PLD 4060',url: require("../../assests/Products/Polaroid/PLD 4060/img1.jpg"),prise:"1200"},
    {name:"Polaroid",modele:'PLD 4048',url: require("../../assests/Products/Polaroid/PLD 4048/img1.jpg"),prise:"1200"},
    {name:"Polaroid",modele:'PLD 6119',url: require("../../assests/Products/Polaroid/PLD 6119/img1.jpg"),prise:"1200"},
    {name:"Police",modele:'SPL568',url: require("../../assests/Products/Police/SPL568/img1.jpg"),prise:"3000"},
    {name:"Police",modele:'SPL 569',url: require("../../assests/Products/Police/SPL 569/img1.jpg"),prise:"3000"},
    {name:"Police",modele:'SPL642',url: require("../../assests/Products/Police/SPL642/img1.jpg"),prise:"3000"}
    
]

class index extends Component {
    state={
        itemList:FristpageProducts,
        filter:"",
        sort:""
    }
    filterList = ()=>{
        const filter = this.state.filter;
        if(filter === ""){

            this.setState({
                itemList: FristpageProducts
           })
        }
        else{
        let itemList = FristpageProducts.filter(product => product.name.toLowerCase() === filter.toLowerCase() || product.modele.toLowerCase() === filter.toLowerCase());
        this.setState({
            itemList: itemList
       })
    }
    }
    onChangeHandle=(e)=>{
        this.setState({
            filter:e.target.value
        })
    }
    onChangeHandleS=(e)=>{
        let sortedList = this.state.itemList
        if(e.target.value ===""){}
        else if(e.target.value ==="1"){
            sortedList.sort((a, b) => (a.name > b.name) ? 1 : -1)
        }else if(e.target.value ==="2"){
            sortedList.sort((a, b) => (a.name < b.name) ? 1 : -1)
        }else if(e.target.value ==="3"){
            sortedList.sort((a, b) => (a.prise > b.prise) ? 1 : -1)
        }else if(e.target.value ==="4"){
            sortedList.sort((a, b) => (a.prise < b.prise) ? 1 : -1)
        }

        this.setState({
            sort:e.target.value,
            itemList:sortedList
        })

    }
    onAddToCart=(item)=>{
        this.props.onAddToCart(item)
      }
    render() {
        console.log(this.state)
        const {itemList,filter,sort} = this.state
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
                <Col md="6" className="text-right">
                <InputGroup className="mb-3" style={{width:"200px"}}>
    <FormControl
      placeholder="Search"
      aria-label="Search"
      value={filter}
      aria-describedby="basic-addon2"
      onChange={this.onChangeHandle}
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" onClick={this.filterList}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Button>
    </InputGroup.Append>
  </InputGroup>
                </Col>
                <Col md="6" className="text-right">
                <Form.Group controlId="exampleForm.SelectCustom" style={{width:"200px",float: "right"}}>
    <Form.Control as="select" custom onChange={this.onChangeHandleS} value={sort}>
    <option value="">Sort</option>
      <option value="1">Name asc</option>
      <option value="2">Name desc</option>
      <option value="3">Price asc</option>
      <option value="4">Price desc</option>
      </Form.Control>
  </Form.Group>
                </Col>
            </Row>
            <Row>
                {
                   itemList.map(object =>
                    
                    <Col md="4 my-2 px-5">
                        <Card className="withShadow">
                            <Card.Body className="text-left pl-5">
                            <img src={object.url} style={{width:"100%"}}/>
                            <Link to={`/Product/`+ object.modele}><h3>{object.name}</h3></Link>
                            <h4>{object.prise} Kr</h4>
                            <p className="text-right">
                                <Button variant="warning" className="buttonSite" onClick={()=>this.onAddToCart(object)}><FontAwesomeIcon icon={faCartPlus}/></Button>
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