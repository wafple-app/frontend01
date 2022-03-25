import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import platformReducer from "./platformReducer";

let reducers = combineReducers({
	cartReducer: cartReducer,
	platformReducer: platformReducer
});

const rootReducer = (state, action) => {
	return reducers(state, action);
};

export default rootReducer;
