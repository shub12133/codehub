 import {AUTH_USER , AUTH_LOGIN , ERROR_AUTH} from '../actions/types'
 const initialState = {
     isAuthenticated : false ,
     User : {},
     successMessage : null ,
     error : null 
    
 }

 export const authReducer = (state=initialState , action)=> {
     switch(action.type){
        case AUTH_USER :
             return {
                 ...state,
                 successMessage :action.payload
             }
        case AUTH_LOGIN : 
             return {
                 ...state, 
                 isAuthenticated : true,
                 User : action.payload
             }
        
        case ERROR_AUTH : 
             return {
                 ...state, 
                 error : action.payload
             }
        default :
             return state
     }
 }