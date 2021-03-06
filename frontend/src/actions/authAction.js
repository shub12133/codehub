import axios from "axios";
import {setAlert} from "./alert";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE,OAUTH_SUCCESS,
    GITLAB_USER,
    PROJECTS_DATA,
    CREATE_REPOSITORY,
    GITLAB_USER_FAIL,
    GITLAB_PROJECT_FAIL
} from "./types";
import { Users } from 'gitlab';
import {createUser,getUser} from './gitActions'
import {host,registerRoute,loginRoute,authDashboard} from '../utils/constants'
import setAuthToken from "../utils/setAuthToken";
import { Gitlab } from '@gitbeaker/browser'; // All Resources
import { ProjectsBundle } from 'gitlab';

 
 

export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try{
        const res = await axios.get(`${host}${authDashboard}`);
        dispatch({
            type : USER_LOADED,
            payload : res.data
        })
        getUser(res.data)
    }catch(err){
        dispatch({
            type : AUTH_ERROR
        })
    }

}

export const redirectUser = (history)=> dispatch=> {
    history.push('/dashboard')
}


//Register User
export const register = (data,history) => 
    async dispatch => {
        const config = {
            headers : {
                'Content-Type' : "application/json"
            }
        }
    
    try{

        const res = await axios.post(`${host}${registerRoute}`,data,config);
        dispatch({
            type : REGISTER_SUCCESS,
            payload : res.data
        });
        dispatch(loadUser());
        dispatch(createUser(data))
        dispatch(redirectUser(history))
    }catch(err){
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, "red")));
        }
        dispatch({
            type : REGISTER_FAIL
        });
    }
}


 



//Login User
export const login = (data,history) => 
    async dispatch => {
        const config = {
            headers : {
                'Content-Type' : "application/json"
            }
        };
    
    try{
        const res = await axios.post(`${host}${loginRoute}`,data,config);
       
        dispatch({
            type : LOGIN_SUCCESS,
            payload : res.data
        });
         dispatch(loadUser());
         dispatch(redirectUser(history))
        // history.push('/dashboard')


    }catch(err){
      
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, "red")));
        }
        dispatch({
            type : LOGIN_FAIL
        });
         
    }

}

//LOG OUT User and Clear Profile 
export const logout = (history) => dispatch => {
   
    dispatch({type : CLEAR_PROFILE});
    dispatch({type : LOGOUT});
    localStorage.clear();
    sessionStorage.clear();
    history.push('/')
}

export const oauthAction =  (token,history) => dispatch=>{
    //set the toke in localstorage
    dispatch({
        type : OAUTH_SUCCESS,
        payload : token
    })
    dispatch(loadUser());
    history.push('/dashboard')
}