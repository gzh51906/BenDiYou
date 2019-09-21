import React, { Component } from "react";

import Homefoot from './components/Homefoot.jsx'
import Api from '../../api';
import { PageHeader, Row, Col, Icon, Input, BackTop, List, Carousel, Radio, Button } from 'antd';
const { Search } = Input;
import './scss/home.scss'
class Home extends Component {
    state = {
        goodlists: {},
        dotPosition: 'top',
    }
    handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

    // 在componentDidMount阶段发送网络请求
    async componentDidMount() {
        let { data } = await Api.get({

        })
        data = data[0].datas
        console.log(data);
        this.setState({
            data
        });
    }
    render() {

        let { data } = this.state;
        let shuma67 = data && [
            ...data[6].home3.item,
            ...data[7].home3.item]
        // let imgbig = data[1].home1.image
        let goodslists = data && [
            ...data[9].goods.item,
            ...data[10].goods.item,
            ...data[11].goods.item,
            ...data[12].goods.item,
            ...data[13].goods.item,
            ...data[14].goods.item
        ]
        console.log(data && shuma67);
        console.log(data && goodslists);

        return (
            <div>
                <Row type="flex" justify="center" style={{ height: '45px', background: '#d50012', fontSize: '25px' }}>
                    <Col span={3} style={{ lineHeight: "45px", textAlign: "center", color: '#fff' }}><Icon type="environment" /></Col>
                    <Col span={18}></Col>
                    <Col span={3} style={{ lineHeight: "45px", textAlign: "center", color: '#fff' }}><Icon type="message" /></Col>
                </Row>
                <Input className="search-fangdajing"
                    placeholder="在此搜索你要的……"
                    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}

                />
                <Row type="flex" justify="center" style={{ height: '45px', background: '#d50012', fontSize: '12px' }}>
                    <Col span={3} style={{ lineHeight: "45px", textAlign: "center", color: '#fff' }}>蔬菜</Col>
                    <Col span={3} style={{ lineHeight: "45px", textAlign: "center", color: '#fff' }}>水果</Col>
                    <Col span={3} style={{ lineHeight: "45px", textAlign: "center", color: '#fff' }}>牛奶</Col>
                    <Col span={3} style={{ lineHeight: "45px", textAlign: "center", color: '#fff' }}>鲜肉</Col>
                    <Col span={3} style={{ lineHeight: "45px", textAlign: "center", color: '#fff' }}>酒</Col>
                    <Col span={3} style={{ lineHeight: "45px", textAlign: "center", color: '#fff' }}>饮料</Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={24} >
                        {/* 首页顶部图片 */}
                        <img src={data && data[1].home1.image} style={{ width: '100%' }} />
                    </Col>
                </Row>
                {/* 首页商品分类 */}
                <Row style={{ padding: '10px' }}>
                    <List
                        grid={{ gutter: 16, column: 5 }}
                        dataSource={data && data[2].goods_class.item}
                        renderItem={item => (
                            <List.Item >
                                <img src={item.image} style={{ width: '100%' }} />
                                <b>{item.title}</b>
                            </List.Item>
                        )}
                    />
                </Row>
                {/* 本地有上翻文字小轮播 */}
                <Row style={{ height: '60px' }}>
                    <Col span={7} style={{ marginLeft: '10px', marginTop: '6px' }}>
                        <img src={data && data[3].broad.image} style={{ width: "100%", height: '60px' }}></img>
                    </Col>
                    <Col span={14} style={{ height: '60px' }}>
                        <Carousel dotPosition="left" autoplay>

                            {
                                data && data[3].broad.list.map(item => {
                                    return <div key={item.url} style={{ width: '100%', height: '100%' }}>
                                        <a href={item.url} style={{ display: 'inline-block', width: '100%', height: '100%' }}>
                                            <h4 style={{ height: '30px', lineHeight: '30px', marginBottom: '3px', marginLeft: '16px', textAlign: 'left', fontSize: '16px' }}>{item.title}</h4>
                                            <span style={{ display: 'block', height: '30px', lineHeight: '30px', marginTop: '0px', marginLeft: '16px' }}>
                                                <em style={{
                                                    display: 'inline-block', fontStyle: 'normal', background: '#e90b3f',
                                                    color: '#fff',
                                                    paddingLeft: '4px',
                                                    paddingRight: '4px',
                                                    marginRight: '10px',
                                                }}>
                                                    {item.prominent}</em>
                                                {item.describe}
                                            </span>
                                        </a>
                                    </div>
                                })
                            }
                        </Carousel>
                    </Col>
                </Row>
                {/* 轻松更便捷 */}
                <div style={{
                    width: '100%',
                    margin: 'auto',
                    marginBottom: '1%',
                    marginTop: '1%'
                }}>
                    <h4 style={{
                        fontSize: '18px',
                        fontWeight: '500',
                        textIndent: '3%',
                        marginTop: '0.5rem',
                        marginBottom: '0.4rem'
                    }}>轻松更便捷</h4>
                    <ul style={{ display: 'contents' }}>
                        <li style={{
                            width: '50%',
                            float: 'left'
                        }}>
                            <img src={data && data[4].home8.rectangle1_image}
                                style={{ width: '98%' }}
                            ></img>
                        </li>
                        <li style={{
                            width: '50%',
                            float: 'left'
                        }}>
                            <img src={data && data[4].home8.rectangle2_image}
                                style={{ width: '98%' }}
                            ></img>
                        </li>
                    </ul>
                    <div style={{ zoom: '1', clear: 'both', width: '100%' }}></div>
                </div>
                {/* 潮牌数码城 */}
                <div style={{ width: '100%', backgroundColor: '#f5f5f5' }}>
                    <img src={data && data[5].home5.image}
                        style={{ width: '100%' }}>
                    </img>
                </div>
                {/* 四个数码 */}
                <List
                    grid={{ gutter: 4, column: 2 }}
                    dataSource={data && shuma67}
                    renderItem={item => (
                        <List.Item style={{ marginBottom: '4px' }}>
                            <img src={item.image} style={{ width: '100%' }} />
                        </List.Item>
                    )}
                />
                <div style={{ width: '100%', backgroundColor: '#f5f5f5' }}>
                    <img src={data && data[8].home1.image}
                        style={{ width: '100%' }}>
                    </img>
                </div>
                {/* 热卖商品列表 */}
                <List
                    className='hotlistitem'
                    style={{ background: '#f5f5f5' }}
                    grid={{ gutter: 10, column: 2 }}
                    dataSource={data && goodslists}
                    renderItem={item => (
                        <List.Item style={{ padding: '5px', background: '#fff' }}>
                            <img src={item.goods_image} style={{ width: '100%' }} />
                            <dl style={{ padding: '.2rem', margin: 0 }}>
                                <dt
                                    style={{
                                        display: 'block',
                                        fontSize: '0.65rem',
                                        lineHeight: '1rem',
                                        color: '#000',
                                        height: '2rem',
                                        overflow: 'hidden',
                                    }}>{item.goods_name}</dt>
                                <dd
                                    style={{
                                        display: 'block',
                                        fontSize: '1rem',
                                        paddingTop: '7px',
                                        marginTop: '0.4rem',
                                        color: '#DB4453',
                                        borderTop: 'solid 0.05rem #EEE',
                                    }}>
                                    ￥
                                <em>{item.goods_promotion_price}</em>
                                    {/* 加入购物车的按钮 */}
                                    <Button
                                        style={{ float: 'right' }}
                                        type="danger" shape="circle" icon="plus" />
                                </dd>
                            </dl>
                        </List.Item>
                    )}
                />
                <div style={{ width: '100%', backgroundColor: '#f5f5f5' }}>
                    <img src={data && data[15].home1.image}
                        style={{ width: '100%' }}>
                    </img>
                </div>
                {/* 底部组件 */}
                <Homefoot></Homefoot>
            </div>
        )
    }
}

export default Home;