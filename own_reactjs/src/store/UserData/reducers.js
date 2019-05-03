import { SET_USER_DATA } from "./actions";
import { loadLocalStorageUserData } from "../../components/localStorage/authenticationStorage";
import { deCode } from "../../components/JWTToken/deCode";

const localUserData = loadLocalStorageUserData() ? deCode(loadLocalStorageUserData()) : {};

const defaultState = localUserData ? localUserData : {};

export const userDataReducer = (state = defaultState, action) => {

    switch (action.type) {

        case SET_USER_DATA:

            return {
                ...state,
                id: action.payload.id,
                login: action.payload.login,
                email: action.payload.email,
                password: action.payload.password
            }

    }

    return state;

};