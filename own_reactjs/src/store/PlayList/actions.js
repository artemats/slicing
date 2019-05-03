export const ADD_TRACK = 'ADD_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

export const addTrack = (track) => {

    return {

        type: ADD_TRACK,
        payload: track

    }

};

export const removeTrack = (id) => {

  return {

      type: REMOVE_TRACK,
      payload: id

  }

};