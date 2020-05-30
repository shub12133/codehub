import {combineReducers} from 'redux';
import {auth} from './authReducer'
import alert from './alert'
import {projects} from './projectsReducer'
import {users} from './userReducer'
const rootReducer = combineReducers(
    {
    auth,
     alert,
     projects,
     users
    
    }
)

export default rootReducer;