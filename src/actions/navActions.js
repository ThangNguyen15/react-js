/**
 * Define navigation action types
 *
 * @type {{SELECT_DASHBOARD: string, SELECT_PROFILE: string, SELECT_TABLE: string}}
 */
export const NavActionTypes = {
    SELECT_DASHBOARD: "selectDashboard",
    SELECT_PROFILE: "selectProfile",
    SELECT_TABLE: "selectTable",
};

/**
 * Handling select dashboard
 *
 * @returns {{payload: boolean, type: string}}
 */
export const selectDashboard = () => {
    return {
        type: NavActionTypes.SELECT_DASHBOARD,
        payload: true
    };
};

/**
 * Handling select profile
 *
 * @returns {{payload: boolean, type: string}}
 */
export const selectProfile = () => {
    console.log(2222);
    return {
        type: NavActionTypes.SELECT_PROFILE,
        payload: true
    };
};

/**
 * Handling select table
 * @returns {{payload: boolean, type: string}}
 */
export const selectTable = () => {
    return {
        type: NavActionTypes.SELECT_TABLE,
        payload: true
    }
};