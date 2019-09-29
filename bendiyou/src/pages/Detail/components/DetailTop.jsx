import React, { Component } from "react";
import { Menu, Button, Radio, Icon, Dropdown, message } from 'antd';

class DetailTop extends Component {
    state = {
        size: 'large',
    };

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };
    handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };

    handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    render() {
        const { size } = this.state;
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">
                <Icon type="home" />
                   首页
              </Menu.Item>
                <Menu.Item key="2">
                <Icon type="search" />
                    搜索
              </Menu.Item>
                <Menu.Item key="3">
                <Icon type="shopping-cart" />
                   购物车
              </Menu.Item>
              <Menu.Item key="4">
              <Icon type="user" />
                    我的商城
              </Menu.Item>
              <Menu.Item key="5">
              <Icon type="message" />
                   消息
              </Menu.Item>
            </Menu>
        );
        return <div className="detailTop">
            <Button shape="circle" size={size}>
                <Icon type="left" />
            </Button>
            <Dropdown overlay={menu} trigger={['click']} className="more">
                <Button shape="circle" size={size}>
                <a className="ant-dropdown-link" href="#">
                    <Icon type="ellipsis" shape="circle"/>
                </a>
            </Button>
            </Dropdown>
        </div>
    }
}

export default DetailTop;