// 封装一个底部组件（登录注册，商家中心  ）
import React,{Component} from 'react';

import {List,Icon} from 'antd'
import { log } from 'util';
export default class Homefoot extends Component{
    state={
        loginItem:["登录","注册","商铺中心","反馈"],
        pcItem:[
            {name:'客服端',img:'cluster'},
            {name:'触屏版',img:'mobile'},
            {name:'电脑版',img:'desktop'}
        ]
    }
    render(){
        let {loginItem,pcItem} = this.state
        console.log(loginItem);
        
        return(
            <div id='footer'> 
                <List
                style={{borderBottom: 'solid 0.05rem #EEE',padding: '0.6rem 0'}}
                className=''
                    grid={{ gutter: 10, column: 4 }}
                    dataSource={loginItem}
                    renderItem={item => (
                        <List.Item style={{ padding: '5px',textAlign:'center'}}>
                            <a style={{color:'#555'}}>{item}</a>
                        </List.Item>
                        )}
                />
                   <List
                    className=''
                    style={{}}
                    grid={{ gutter: 10, column: 3 }}
                    dataSource={pcItem}
                    renderItem={item => (
                        <List.Item style={{ padding: '5px',
                        textAlign:'center',
                        fontSize: '14px',
                        marginTop: 0,
                        marginBottom: '10px',
                        color: '#8f8f94'}}>
                            <Icon type={item.img} 
                            style={{
                                fontSize: '21px',
                            }}
                            />
                            <p>{item.name}</p>
                        </List.Item>
                        )}
                />
                <div style={{height: '1.6rem'}}></div>
            </div>
        )
    }
}