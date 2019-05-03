import { LOGIN_USER } from "./actions";
import { getLoggedInFromLocalStorage } from "../../components/localStorage/authenticationStorage";

const defaultState = { isLoggedIn: getLoggedInFromLocalStorage() ? true : false };

export const isLoggedInReducer = (state = defaultState, action) => {

    switch (action.type) {

        case LOGIN_USER:

            return {

                ...state, isLoggedIn: action.payload

                };

    }

    return state;

};