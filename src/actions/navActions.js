export const NavActionTypes = {
    SELECT_DASHBOARD: "selectDashboard",
    SELECT_PROFILE: "selectProfile",
    SELECT_TABLE: "selectTable",
};

export const selectDashboard = () => {
    return {
        type: NavActionTypes.SELECT_DASHBOARD,
        payload: true
    };
};

export const selectProfile = () => {
    console.log(2222);
    return {
        type: NavActionTypes.SELECT_PROFILE,
        payload: true
    };
};

export const selectTable = () => {
    return {
        type: NavActionTypes.SELECT_TABLE,
        payload: true
    }
}