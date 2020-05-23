import {AUTH_USER , AUTH_LOGIN , ERROR_AUTH,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,USER_LOADED, } from '../actions/types'
  const initialState = {
     isAuthenticated : false ,
     User : {},
     successMessage : null ,
     error : [] ,
     token:{},
    
     loading: true,
     token : localStorage.getItem('token')
 }

 export const authReducer = (state=initialState , action)=> {
     switch(action.type){
        case USER_LOADED : 
        return {
            ...state,
            isAuthenticated : true,
            loading : false,
            User : action.payload
        }
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
             case LOGIN_SUCCESS:
           return {
               ...state,
               token:action.payload,
               isAuthenticated:true,
               loading:false
           }
        case LOGIN_SUCCESS : 
        localStorage.setItem('token' , action.payload)
        return {
            ...state , 
            token : action.payload, 
            isAuthenticated :true,
            loading : false
        }
        case LOGOUT : 
        case LOGIN_FAIL :
        case ERROR_AUTH :
            localStorage.removeItem('token')
            return {
                ...state, 
                token : null,
                isAuthenticated : false,
                loading : false,
                error:action.payload
            }
        default :
             return state
     }
 }