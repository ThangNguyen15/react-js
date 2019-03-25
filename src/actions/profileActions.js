/**
 * Define action types
 * @type {{GET_PROFILE: string}}
 */
export const ProfileActionTypes = {
    GET_PROFILE: "get_profile"
};

/**
 * Get profile data from Api
 *
 * @returns {Function}
 */
export const profileActions = () => {
    return async dispatch => {
        //Call Api
        const res = await fetch("https://demo0571923.mockable.io/getImage");
        const result = await res.json();

        //Return result to reducer
        dispatch({
            type: ProfileActionTypes.GET_PROFILE,
            payload: result
        });


    }
};