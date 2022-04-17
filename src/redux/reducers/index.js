import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import platformReducer from "./platformReducer";
import userReducer from "./userReducer";

let reducers = combineReducers({
	cartReducer: cartReducer,
	platformReducer: platformReducer,
	userReducer: userReducer
});

const rootReducer = (state, action) => {
	return reducers(state, action);
};

export default rootReducer;
