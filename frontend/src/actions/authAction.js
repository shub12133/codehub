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

import {host,registerRoute,loginRoute,authDashboard} from '../utils/constants'
import setAuthToken from "../utils/setAuthToken";
import { Gitlab } from '@gitbeaker/browser'; // All Resources
import { ProjectsBundle } from 'gitlab';

 
const api = new Gitlab({
    host: `https://codehub.code.in`,
    token: '79Sus8xpmuKSsmFkKw2D',
  
  });

  const services = new ProjectsBundle({
    host:   'https://codehub.code.in',
    token: '79Sus8xpmuKSsmFkKw2D'
  })
 


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
    }catch(err){
        dispatch({
            type : AUTH_ERROR
        })
    }

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



//create user into giutlab 
export const createUser=(data)=> async dispatch=>{
    try{
      let users= await api.Users.create({name:data.name,username:data.username,email:data.email,password:data.password,admin:true})
    
        dispatch({
            type:GITLAB_USER,
            payload:users
        })
        console.log(users)
    
        
    }catch(err){
        console.log(err)
        dispatch({
            type : GITLAB_USER_FAIL
        });
    }
}


export const createRepo=(data)=>async dispatch=>{
    try{
        console.log("hello")
        services.Projects.create({userId:2,name:'bharathcodesnot'})
        .then((repository)=>{
            dispatch({
                type:CREATE_REPOSITORY,
                payload:repository
            })
            console.log(repository)
        })
    } catch(err){
        console.log(err)
        dispatch({
            type : GITLAB_PROJECT_FAIL
        }); 
       }
    
}


export const getUser=(data)=>async dispatch=>{
    try{
        console.log(data)
        const userName=data
        api.Users.search({ username:data})
        .then((user)=>{
            dispatch({
                type:GITLAB_USER,
                payload:user
            })
            console.log(user)
        })
    } catch(err){
        console.log(err)
        dispatch({
            type : GITLAB_USER_FAIL
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
        history.push('/dashboard/explore')


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