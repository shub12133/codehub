import {combineReducers} from 'redux';
import {auth} from './authReducer'
import alert from './alert'
const rootReducer = combineReducers(
    {
    auth,
     alert}
)

export default rootReducer;