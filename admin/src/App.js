import React,{Component} from "react";

import {Route,Redirect,Switch,withRouter} from "react-router-dom";
import {Menu,Icon,Badge } from "antd";
import {connect} from "react-redux";

import Home from "@/Home";
import Mine from "@/Mine";
import Cart from "@/Cart";
import Discover from "@/Discover";

import Goods from "@/Goods";

// 引入store
// import store from "./redux/store";

class App extends Component{
    state={
        current:"/home",
        menu:[{
            path:"/home",
            text:"首页",
            icon:"home",
            name:"home"
        },{
            path:"/discover",
            text:"发现",
            icon:"eye",
            name:"discover"
        },{
            path:"/cart",
            text:"购物车",
            icon:"shopping-cart",
            name:"cart"
        },{
            path:"/mine",
            text:"我的",
            icon:"user",
            name:"mine"
        }]
    }
    goto=(path)=>{
        this.props.history.push(path)
    }
    changeMenu=({key})=>{
        this.setState({
            current:key
        })
        this.goto(key)
    }
    render(){
        console.log(this.props);
        

        let {cartlength} =this.props;
        
        return(
        <div>
            <Menu 
            onClick={this.changeMenu} 
            selectedKeys={[this.state.current]} 
            mode="horizontal">
                {
                    this.state.menu.map((item)=>{
                        return <Menu.Item key={item.path}>
                            {
                                item.name ==="cart"?
                                <Badge count={cartlength}>
                                    <Icon type={item.icon} />
                                    {item.text}
                                </Badge>
                                :
                               <>
                                <Icon type={item.icon} />
                                    {item.text}
                               </>
                            }
                        
                        </Menu.Item>
                    })
                }
            </Menu>
            <div>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/discover" component={Discover}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/mine" component={Mine}></Route>
                    {/* 动态路由 */}
                    <Route path="/goods/:id" component={Goods}></Route>

                    <Route path="/notfound" render={()=><div>404 not found</div>}></Route>
                    <Redirect from="/" to="/home" exact></Redirect>
                    <Redirect from="*" to="/notfound"></Redirect>

                </Switch>
            </div>
        </div>)
    }
}
App = withRouter(App);

let mapStateToProps =(state)=>{
    return {
        cartlength:state.cart.goodslist.length
    }
}
App =connect(mapStateToProps)(App);
export default App;