export const SELECT_TRACK = 'SELECT_TRACK';
export const REMOVE_PLAYING_TRACK = 'REMOVE_PLAYING_TRACK';

export const selectTrack = (track) => {

    return {

        type: SELECT_TRACK,
        payload: track

    }

};

export const removePlayingTrack = () => {

    return {

        type: REMOVE_PLAYING_TRACK,
        payload: {}

    }

};