import { ADD_TRACK, REMOVE_TRACK } from "./actions";
import { getPlayListFromLocalStorage } from "./localStorage";

const defaultState = getPlayListFromLocalStorage() ? getPlayListFromLocalStorage() : [];

export const playListReducer = (state = defaultState, action) => {

    switch (action.type) {

        case ADD_TRACK:
            return [
                ...state, action.payload
            ];

        case REMOVE_TRACK:
            return state.filter( track => track.id !== action.payload );

    }

    return state;

};