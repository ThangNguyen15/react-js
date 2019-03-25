/**
 * Define action types
 * @type {{GET_USERS: string}}
 */
export const TableActionTypes = {
    GET_USERS: "get_users"
};

/**
 * Get table data from Api
 *
 * @returns {Function}
 */
export const tableActions = () => {
    return async dispatch => {
        //Call Api
        const res = await fetch("https://demo2885543.mockable.io/");
        const result = await res.json();

        //Return result to reducer
        dispatch({
            type: TableActionTypes.GET_USERS,
            payload: result.items
        });


    }
};