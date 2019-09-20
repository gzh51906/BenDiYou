import {
    call,
    apply,
    put,
    takeEvery,
    takeLatest,
    delay
} from "redux-saga/effects";



// import Api from "../api/index";
import {
    CHANGE_QTY,
    changeQty
} from "./actions/cart";

function* helloSaga() {
    yield console.log("hello saga");

}

function* getKucun({
    goods_id,
    qty
}) {
    const data = yield call(Api.getKucun);
    // console.log(data.data);
    // console.log(goods_id, qty);


    if (qty > data.data) {
        
        qty = data.data
    }
    console.log(qty,data.data);
    
    // if (qty <= data.data) {
    //     put({
    //         type: "CHANGE_QTY",
    //         goods_id,
    //         qty
    //     })
    // } else {
    //     put({
    //         type: "CHANGE_QTY",
    //         goods_id,
    //         qty: data.data
    //     })
    // }

    yield put(changeQty(goods_id, qty))
}

function* rootSaga() {
    yield takeLatest("HELLO_SAGA", helloSaga);
    yield takeLatest("CHANGE_QTY_ASYNC", getKucun);
}

export default rootSaga;