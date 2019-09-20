import React,{Component} from "react";

import {Route,Redirect,Switch,withRouter} from "react-router-dom";
import {Menu,Icon,Badge ,Row,Col} from "antd";
import {connect} from "react-redux";

import Home from "./pages/Home";
import Feilei from "./pages/Fenlei";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Mine from "./pages/Mine";

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
    // goto=(path)=>{
    //     this.props.history.push(path)
    // }
    // changeMenu=({key})=>{
    //     this.setState({
    //         current:key
    //     })
    //     this.goto(key)
    // }
    render(){
        // console.log(this.props);
        

        let {cartlength} =this.props;
        
        return(
        <div>
            <Menu 
            // onClick={this.changeMenu} 
            // selectedKeys={[this.state.current]} 
            mode="horizontal">
                <Row type="flex" justify="space-around">
                {
                    this.state.menu.map((item)=>{
                      
                        return      <Col key={item.path}>
                            <Menu.Item>
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
                         </Col>
                        
                    })
                }
                </Row>
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

// App = withRouter(App);

// let mapStateToProps =(state)=>{
//     return {
//         cartlength:state.cart.goodslist.length
//     }
// }
// App =connect(mapStateToProps)(App);
export default App;