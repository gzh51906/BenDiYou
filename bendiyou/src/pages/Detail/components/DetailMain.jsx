import React, { Component } from "react";

import { Carousel } from 'antd';

class DetailMain extends Component {
    onChange = (a, b, c) => {
        console.log(a, b, c);
    }

    render() {

        return <div className="detailMain">
            <Carousel afterChange={this.onChange} className="ban">
                <div className="banner">
                    <img src="https://img.bdyoo.com/shop/store/goods/86/2019/08/86_06198001561862423.jpg-wh360" alt="" />
                </div>
                <div className="banner">
                    <img src="https://img.bdyoo.com/shop/store/goods/86/2019/08/86_06198002272953185.jpg-wh360" alt="" />
                </div>
                <div className="banner">
                    <img src="https://img.bdyoo.com/shop/store/goods/86/2019/08/86_06198002291253814.jpg-wh360" alt="" />
                </div>
            </Carousel>
            <div className="goods-detail-cnt">
                <img src="https://img.bdyoo.com/shop/vda/06071883196486429.png" alt="" />
                <div className="goods-detail-name">
                    <dl>
                        <dt>嘎啦果 脆甜多汁不打蜡 新鲜水果 嘎啦小苹果 3斤 1500g</dt>
                        <dd></dd>
                    </dl>
                </div>
            </div>
            <div className="goods-detail-price">
                <dl>
                    <dt>￥<em>16.50</em></dt>
                </dl>
                <span className="sold">人气：<b id="sell-rq">82</b></span>
            </div>
        </div>
    }
}

export default DetailMain;