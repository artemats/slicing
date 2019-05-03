import { REMOVE_PLAYING_TRACK, SELECT_TRACK } from "./actions";

const defaulState = {};

export const playTrackReducer = (state = defaulState, action) => {

    switch (action.type) {

        case SELECT_TRACK:

            return {
                ...state,
                id: action.payload.id,
                songTitle: action.payload.songTitle,
                authorTitle: action.payload.authorTitle,
                trackUrl: action.payload.trackUrl,
                songPreview: action.payload.songPreview
            };

        case REMOVE_PLAYING_TRACK:

            state = action.payload;

            return state
    }

    return state;

};