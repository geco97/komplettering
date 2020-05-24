import React, { Component } from 'react';
import JumbotronP from '../components/JumbotronP'
import Productcard from '../components/Productcard'
import Related from '../components/Related'
import Section6 from '../components/Section6'
const Products =[
    {name:"Gucci",modele:'GG0148S',url: require("../assests/Products/Gucci/GG0148S/img1.jpg"),prise:"7800"},
    {name:"Gucci",modele:'GG0715SA',url: require("../assests/Products/Gucci/GG0715SA/img1.jpg"),prise:"7800"},
    {name:"Gucci",modele:'GG0767S',url: require("../assests/Products/Gucci/GG0767S/img1.jpg"),prise:"7800"},
    {name:"Versace",modele:'VE2212',url: require("../assests/Products/versace/VE2212/img1.jpg"),prise:"1800"},
    {name:"Versace",modele:'VE4368',url: require("../assests/Products/versace/VE4368/img1.jpg"),prise:"1800"},
    {name:"Versace",modele:'VE4373',url: require("../assests/Products/versace/VE4373/img1.jpg"),prise:"1800"},
    {name:"Ray-Ban",modele:'RB4419',url: require("../assests/Products/Ray ban/RB4419/img1.jpg"),prise:"1000"},
    {name:"Ray-Ban",modele:'NEw Wayfarer',url: require("../assests/Products/Ray ban/NEw Wayfarer/img1.jpg"),prise:"1000"},
    {name:"Ray-Ban",modele:'ORB3025',url: require("../assests/Products/Ray ban/ORB3025/img2.jpg"),prise:"1000"},
    {name:"Burberry",modele:'BE3108',url: require("../assests/Products/Burberry/BE3108/img2.jpg"),prise:"4500"},
    {name:"Burberry",modele:'BE4253',url: require("../assests/Products/Burberry/BE4253/img2.jpg"),prise:"4500"},
    {name:"Burberry",modele:'BE4302',url: require("../assests/Products/Burberry/BE4302/img2.jpg"),prise:"4500"},
    {name:"Carrera",modele:'SHE797',url: require("../assests/Products/Carrera/SHE797/img1.jpg"),prise:"3000"},
    {name:"Carrera",modele:'182',url: require("../assests/Products/Carrera/182/img1.jpg"),prise:"3000"},
    {name:"Carrera",modele:'5043',url: require("../assests/Products/Carrera/5043/img1.jpg"),prise:"3000"},
    {name:"Oakley",modele:'Top Knot',url: require("../assests/Products/Oakley/Top Knot/img1.jpg"),prise:"2500"},
    {name:"Oakley",modele:'Square Wire',url: require("../assests/Products/Oakley/Square Wire/img1.jpg"),prise:"2500"},
    {name:"Oakley",modele:'Holbrook Mix',url: require("../assests/Products/Oakley/Holbrook Mix/img1.jpg"),prise:"2500"},
    {name:"Persol",modele:'PO3186S',url: require("../assests/Products/Persol/PO3186S/img1.jpg"),prise:"1000"},
    {name:"Persol",modele:'PO3172S',url: require("../assests/Products/Persol/PO3172S/img1.jpg"),prise:"1000"},
    {name:"Persol",modele:'PO3230S',url: require("../assests/Products/Persol/PO3230S/img1.jpg"),prise:"1000"},
    {name:"Polaroid",modele:'PLD 4060',url: require("../assests/Products/Polaroid/PLD 4060/img1.jpg"),prise:"1200"},
    {name:"Polaroid",modele:'PLD 4048',url: require("../assests/Products/Polaroid/PLD 4048/img1.jpg"),prise:"1200"},
    {name:"Polaroid",modele:'PLD 6119',url: require("../assests/Products/Polaroid/PLD 6119/img1.jpg"),prise:"1200"},
    {name:"Police",modele:'SPL568',url: require("../assests/Products/Police/SPL568/img1.jpg"),prise:"3000"},
    {name:"Police",modele:'SPL 569',url: require("../assests/Products/Police/SPL 569/img1.jpg"),prise:"3000"},
    {name:"Police",modele:'SPL642',url: require("../assests/Products/Police/SPL642/img1.jpg"),prise:"3000"}  
]
class Product extends Component {
    componentDidMount() { 
        const { name } = this.props.match.params;
        let currentItem={};
        let currentRelated=[];
        const Items = Products;
        currentItem = Items.find(product => product.modele === name);
        currentRelated = Items.filter(product => product.name === currentItem.name && product.modele !== currentItem.modele);
        this.setState({
           currentItem: currentItem,
           currentRelated:currentRelated
       })
     }
    state={
        currentItem:{},
        currentRelated:{}
    }
    render() {
        return (
            <div>
                <JumbotronP/>
                <Productcard currentItem={this.state.currentItem}  onAddToCart={this.props.onAddToCart}/> 
                <Related currentRelated={this.state.currentRelated}  onAddToCart={this.props.onAddToCart}/>
                <Section6></Section6>
            </div>
        );
    }
}

export default Product;