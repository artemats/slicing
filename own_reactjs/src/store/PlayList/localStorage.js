export const savePlayListToLocalStorage = (state) => {

    try {

        const serializedState = JSON.stringify(state);

        localStorage.setItem('playList', serializedState);

    } catch (err) {

        console.error('Error with save state to localStorage');

    }

};

export const getPlayListFromLocalStorage = () => {

    try {

        const serializedState = localStorage.getItem('playList');

        if(serializedState === null) {

            return undefined;

        }
        return JSON.parse(serializedState);

    } catch (err) {

        console.error('Error on get state from localStorage');
        return undefined;

    }

};