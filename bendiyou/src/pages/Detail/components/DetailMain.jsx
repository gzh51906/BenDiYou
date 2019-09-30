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
            <div className="goods-detail-item">
                <div className="item-name">送至</div>
                <div className="item-con">
                    <a href="javascript:void(0);" id="get_area_selected">
                        <dl className="goods-detail-freight">
                            <dt><span id="get_area_selected_name">湖北省 黄石市 黄石港区</span><strong id="get_area_selected_whether">有货</strong></dt>
                            <dd id="get_area_selected_content">运费：5.00 元</dd>
                        </dl>
                    </a>
                </div>
                <div id="getTime">该商品可配送时间：09:00-17:00，现在购买，预计今天10:30前送达</div>
                <div className="item-more location"></div>
            </div>
            
        </div>
    }
}

export default DetailMain;