import { combineReducers } from 'redux';
import { authReducer } from './Auth/reducers';
import { registrationReducer } from './Registration/reducers';
import { todoReducer } from "./Todo/reducers";
import { isLoggedInReducer } from "./SignIn/reducers";
import { userDataReducer } from './UserData/reducers'
import { playListReducer } from "./PlayList/reducer";
import { playTrackReducer } from "./PlayTrack/reducers";

export default combineReducers({
    authReducer: authReducer,
    registrationReducer: registrationReducer,
    todoReducer: todoReducer,
    userDataReducer: userDataReducer,
    isLoggedInReducer: isLoggedInReducer,
    playListReducer: playListReducer,
    playTrackReducer: playTrackReducer
});