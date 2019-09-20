import {
    ADD_TO_CART,
    REMOVE_CART,
    CHANGE_QTY,
    CLEAR_CART
} from "../actions/cart";

// 初始state
let defaultState = {
    goodslist: [{
        goods_id: 1,
        goods_image: "https://www.nanshig.com/data/upload/shop/store/goods/47/47_06095303389813607_240.jpg",
        goods_name: "男t恤五分袖ins夏季上衣服韩版潮流2019新款嘻哈潮牌帅气 白色上衣 L",
        goods_price: 999,
        qty: 1
    }, {
        goods_id: 2,
        goods_image: "https://www.nanshig.com/data/upload/shop/store/goods/47/47_06095303389813607_240.jpg",
        goods_name: "男t恤五分袖ins夏季上衣服韩版潮流2019新款嘻哈潮牌帅气 白色上衣 L",
        goods_price: 999,
        qty: 1
    }, {
        goods_id: 3,
        goods_image: "https://www.nanshig.com/data/upload/shop/store/goods/47/47_06095303389813607_240.jpg",
        goods_name: "男t恤五分袖ins夏季上衣服韩版潮流2019新款嘻哈潮牌帅气 白色上衣 L",
        goods_price: 999,
        qty: 1
    }],
    totalPrice: 0
}

function reducer(state = defaultState, action) {
    // console.log(state, action);

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                goodslist: [action.payload, ...state.goodslist]
            }
            case CHANGE_QTY:
                return {
                    ...state,
                    goodslist: state.goodslist.map((item) => {
                        if (item.goods_id === action.goods_id) {
                            item.qty = action.qty
                        }

                        return item;
                    })
                }
                case REMOVE_CART:
                    return {
                        ...state,
                        goodslist: state.goodslist.filter((item) => {
                            return item.goods_id != action.goods_id
                        })
                    }
                    case CLEAR_CART:
                        return {
                            ...state,
                            goodslist: []
                        }

                        default:
                            return state
    }


}

export default reducer;