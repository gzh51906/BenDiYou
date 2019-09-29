import React,{Component} from "react";

import { Layout } from 'antd';
import DetailTop from './components/DetailTop';
import DetailMain from './components/DetailMain'
const { Header, Footer, Sider, Content } = Layout;

import './scss/Detail.scss'
class Detail extends Component{
    render(){
        return <div>
             <DetailTop/>
            <DetailMain/>
        </div>
    }
}

export default Detail;