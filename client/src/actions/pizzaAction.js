import axios from 'axios';
import swal from 'sweetalert';
import BACKEND_URL from '../Url/url'
export const getAllPizzas = () => async (dispatch) => {

    dispatch({ type: 'GET_PIZZAS_REQUEST' });
    try {

        const res = await axios.get(BACKEND_URL + '/api/pizzas/getAllPizzas');
        console.log(res)
        dispatch({ type: "GET_PIZZAS_SUCCESS", payload: res.data });
    } catch (error) {
        dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
    }
}


export const addPizza = (pizza) => async (dispatch) => {

    dispatch({ type: 'ADD_PIZZAS_REQUEST' });
    try {

        const res = await axios.post(BACKEND_URL + '/api/pizzas/addpizza', { pizza });

        dispatch({ type: "ADD_PIZZAS_SUCCESS", payload: res.data });
    } catch (error) {
        dispatch({ type: "ADD_PIZZAS_FAIL", payload: error });
    }
}


export const getPizzaById = (pizzaId) => async (dispatch) => {

    dispatch({ type: 'GET_PIZZABYID_REQUEST' });
    try {

        const res = await axios.post(BACKEND_URL + '/api/pizzas/getpizzabyid', { pizzaId });

        dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: res.data });
    } catch (error) {
        dispatch({ type: "GET_PIZZABYID_FAIL", payload: error });
    }
}


export const updatePizza = (updatedPizza) => async (dispatch) => {

    dispatch({ type: 'UPDATE_PIZZABYID_REQUEST' });
    try {

        const res = await axios.post(BACKEND_URL + '/api/pizzas/updatepizza', { updatedPizza });

        dispatch({ type: "UPDATE_PIZZABYID_SUCCESS", payload: res.data });
        window.location.href = "/admin/pizzalist";
    } catch (error) {
        dispatch({ type: "UPDATE_PIZZABYID_FAIL", payload: error });
    }
}


export const deletePizza = (pizzaId) => async (dispatch) => {
    try {
        const res = await axios.post(BACKEND_URL + '/api/pizzas/deletepizza', { pizzaId })
        swal("Pizza Deleted Successfully!", "success");
        window.location.href = "/admin/pizzalist";
    } catch (error) {
        swal("Error while deleteing Pizza");
    }
}


export const filterPizza = (searchkey, category) => async (dispatch) => {
    let filterdPizza;
    dispatch({ type: "GET_PIZZAS_REQUEST" });
    try {
        const res = await axios.get(BACKEND_URL + "/api/pizzas/getAllPizzas");
        filterdPizza = res.data.filter((pizza) =>
            pizza.name.toLowerCase().includes(searchkey)
        );
        if (category !== "all") {
            filterdPizza = res.data.filter(
                (pizza) => pizza.category.toLowerCase() === category
            );
        }
        dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filterdPizza });
    } catch (error) {
        dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
    }
};


