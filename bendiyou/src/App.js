import React,{Component} from "react";

import {Route,Redirect,Switch,withRouter} from "react-router-dom";
import {Menu,Icon,Badge} from "antd";
import {connect} from "react-redux";

import Home from "./pages/Home";
import Feilei from "./pages/Fenlei";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Mine from "./pages/Mine";


class App extends Component{
    state={
        current:"/home",
        menu:[{
            path:"/home",
            text:"首页",
            icon:"home",
            name:"home"
        },{
            path:"/fenlei",
            text:"分类",
            icon:"appstore",
            name:"fenlei"
        },{
            path:"/shop",
            text:"店铺",
            icon:"gift",
            name:"shop"
        },
        {
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
        let {cartlength} =this.props;
        
        return(
        <div>
            <Menu 
            onClick={this.changeMenu} 
            selectedKeys={[this.state.current]} 
            mode="horizontal"
            style={{
                position:"fixed",
                left:0,
                bottom:0,
                display:"flex",
                boxShadow: "0 0 10px 0 hsla(0, 6%, 58%, 0.6)",
                width:"100%",
                color: "#929292"

            }}
            >
                {
                    this.state.menu.map((item)=>{
                        return <Menu.Item
                         key={item.name}
                          style={{
                              padding:"0px 10px 0px 10px",
                              boxSizing:"border-box",
                              height:50,
                              flex:1,
                              margin:0,
                              textAlign:"center",
                              lineHeight:2,
                              borderBottom:0
                              }}>
                            {
                                item.name ==="cart"?
                                <Badge count={cartlength}>
                                    <Icon 
                                    type={item.icon}
                                     style={{
                                         display:"block",
                                        fontSize:22,
                                       margin:"0px 0px 7px 0px"
                                     }}/>
                                    {item.text}
                                </Badge>
                                :
                               <>
                                <Icon 
                                type={item.icon}
                                 style={{
                                     display:"block",
                                     fontSize:22,
                                     margin:0
                                     }}/>
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
                    <Route path="/fenlei" component={Feilei}></Route>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/mine" component={Mine}></Route>
                    {/* 动态路由 */}
                    {/* <Route path="/goods/:id" component={Goods}></Route> */}
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