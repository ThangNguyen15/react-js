/**
 * @fileOverview Gather all reducers
 * @author thangnt@deha-soft.com (Thang Nguyen)
 */
import {combineReducers} from "redux";
import navReducer from "./navReducer";
import tableReducer from "./tableReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
    navReducer: navReducer,
    tableReducer: tableReducer,
    profileReducer: profileReducer,
});