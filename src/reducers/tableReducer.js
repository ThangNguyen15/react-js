/**
 * @fileOverview table reducer
 * @author thangnt@deha-soft.com (Thang Nguyen)
 */
import {TableActionTypes} from "../actions/tableActions";

/**
 * Reducer store data table get from Api
 * @param state
 * @param action
 * @returns {{profile: Array}}
 */
export default function reducer(state = { users: []}, action) {
    switch (action.type) {
        case TableActionTypes.GET_USERS:
            state.users = action.payload;
            break;
        default:
            break;
    }
    return {...state};
}