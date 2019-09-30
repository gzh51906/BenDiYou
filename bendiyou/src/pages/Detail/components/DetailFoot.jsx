import React, { Component } from "react";

import { Carousel } from 'antd';

import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

class DetailFoot extends Component {
    state = {
        // current: 'mail',
    }
    handleClick = e => {
        console.log('click ', e);
        // this.setState({
        //   current: e.key,
        // })
    }
    render() {
        return (
            <Menu
                className="menu"
                onClick={this.handleClick}
                mode="horizontal"
                style={{
                    position: "fixed",
                    bottom: 0,
                    width: "100%",
                    height: "60px"
                }}
            >
                <Menu.Item key="buy" style={{
                    float: "right",
                    color: "#fff",
                    border: "none",
                    background: "#ED5564"
                }}>
                    立即购买
              </Menu.Item>
                <Menu.Item key="cart" style={{
                    float: "right",
                    color: "#fff",
                    border: "none",
                    background: "#FB6E52"
                }}>
                    加入购物车
              </Menu.Item>
            </Menu>
        )
    }
};


export default DetailFoot;