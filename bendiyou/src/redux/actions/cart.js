// Action Creator
export const ADD_TO_CART = "ADD_TO_CART";
export const CHANGE_QTY = "CHANGE_QTY";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_CART = "REMOVE_CART";

// 添加商品
export function add(goods) {
    return {
        type: ADD_TO_CART,
        payload: goods
    }
}
// 修改数量
export function changeQty(goods_id, qty) {
    return {
        type: CHANGE_QTY,
        goods_id,
        qty
    }
}
// 删除商品
export function remove(goods_id) {
    return {
        type:  REMOVE_CART,
        goods_id
    }
}
// 清空购物车
export function clear() {
    return {
        type: CLEAR_CART
    }
}

export default {
    add,
    changeQty,
    remove,
    clear
}