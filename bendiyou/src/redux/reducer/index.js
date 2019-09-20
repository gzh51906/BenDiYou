import {
    combineReducers
} from "redux";

import cartReducer from "./cart";
import commonReducer from "./common";

// let allReducer = combineReducers(cartReducer, commonReducer);

// export default allReducer;

export default combineReducers({
    cart:cartReducer,
    common:commonReducer
})