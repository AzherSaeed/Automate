
import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';



const RootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore : firestoreReducer,
    auth : AuthReducer
})

export default RootReducer;