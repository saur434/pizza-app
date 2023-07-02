import axios from "axios"
import swal from "sweetalert";
import BACKEND_URL from '../Url/url'
export const registerUser = (user) => async (dispatch) => {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    try {
        await axios.post(BACKEND_URL + "/api/users/register", user);
        dispatch({ type: "USER_REGISTER_SUCCESS" });
    } catch (error) {
        dispatch({ type: "USER_REGISTER_FAIL", payload: error });
    }
};

export const loginUser = (user) => async (dispatch) => {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    try {
        const response = await axios.post(BACKEND_URL + "/api/users/login", user);

        dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        window.location.href = "/";
    } catch (error) {
        dispatch({ type: "USER_LOGIN_FAIL", payload: error });
    }
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
};


export const getAllUsers = () => async (dispatch) => {

    dispatch({ type: 'GET_USERS_REQUEST' });
    try {

        const res = await axios.get(BACKEND_URL + '/api/users/getallusers');
        console.log(res)
        dispatch({ type: "GET_USERS_SUCCESS", payload: res.data });
    } catch (error) {
        dispatch({ type: "GET_USERS_FAIL", payload: error });
    }
}
export const deleteUser = (userid) => async (dispatch) => {
    try {
        await axios.post(BACKEND_URL + "/api/users/deleteuser", { userid });
        swal("User Deleted Succss!", "success");
        window.location.reload();
        // console.log(res);
    } catch (error) {
        swal("Errro While Deleteing User");
    }
};
