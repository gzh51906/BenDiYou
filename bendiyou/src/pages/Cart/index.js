import React,{Component} from "react";

import { Layout } from 'antd';
import CartTop from './components/CartTop';
const { Header, Footer, Sider, Content } = Layout;

import './scss/cart.scss'
class Cart extends Component{
    render(){
        return <CartTop/>
    }
}

export default Cart;