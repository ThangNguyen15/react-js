/**
 * @fileOverview profile reducer
 * @author thangnt@deha-soft.com (Thang Nguyen)
 */
import {ProfileActionTypes} from "../actions/profileActions";

/**
 * Reducer store data profile get from Api
 * @param state
 * @param action
 * @returns {{profile: Array}}
 */
export default function reducer(state = { profile: []}, action) {
    switch (action.type) {
        case ProfileActionTypes.GET_PROFILE:
            state.profile = action.payload;
            break;
        default:
            break;
    }
    return {...state};
}