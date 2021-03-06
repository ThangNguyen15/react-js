/**
 * @fileOverview navigation reducer
 * @author thangnt@deha-soft.com (Thang Nguyen)
 */
import {NavMenu} from "../components/SidebarComponent";
import {NavActionTypes} from "../actions/navActions";

/**
 * Reducer store navigation active or not
 * @param state
 * @param action
 * @returns {{activeNav: string}}
 */
export default function reducer(state = { activeNav: NavMenu.DASHBOARD }, action) {
    switch (action.type) {
        case NavActionTypes.SELECT_DASHBOARD:
            state.activeNav = NavMenu.DASHBOARD;
            break;
        case NavActionTypes.SELECT_PROFILE:
            state.activeNav = NavMenu.PROFILE;
            break;
        case NavActionTypes.SELECT_TABLE:
            state.activeNav = NavMenu.TABLE;
            break;
        default:
            break;
    }

    return { ...state };
}