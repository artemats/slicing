export const saveToLocalStorageUserData = (userData) => {

    try {

        const serializedState = JSON.stringify(userData);

        localStorage.setItem('userData', serializedState);

    } catch (err) {

        console.error('Error with save state to localStorage');

    }

};

export const loadLocalStorageUserData = () => {

    try {

        const serializedState = localStorage.getItem('userData');

        if(serializedState === null) {

            return undefined;

        }
        return JSON.parse(serializedState);

    } catch (err) {

        console.error('Error on get state from localStorage');
        return undefined;

    }

};

export const setLoggedInToLocalStorage = (isLoggedIn) => {

    try {

        const serializedState = JSON.stringify(isLoggedIn);

        localStorage.setItem('isLoggedIn', serializedState);

    } catch (err) {

        console.error('Error with save state to localStorage');

    }

};

export const getLoggedInFromLocalStorage = () => {

    try {

        const serializedState = localStorage.getItem('isLoggedIn');

        if(serializedState === null) {

            return undefined;

        }
        return JSON.parse(serializedState);

    } catch (err) {

        console.error('Error on get state from localStorage');
        return undefined;

    }

};