import {AUTH_USER , AUTH_LOGIN , ERROR_AUTH,LOGIN_SUCCESS,LOGIN_Fail,LOGOUT} from './types'
import axios from 'axios'
import {host,loginpath,register} from '../utils/constants'


//actioncreators 

export const registerLocal = (data,history) => dispatch=>{
    console.log("action",data)
    axios.post(`${host}${register}` , data)
    .then(res => res)
    .then(data => dispatch({
        type : AUTH_USER,
        payload : data
    }))
    .catch(err => {
        dispatch({
            type : ERROR_AUTH,
            payload : err.response
        })
    })
    history.push('./login')
}

export const login=data=>async dispatch=>{
    axios.post(`${host}${login}`,data)
    .then(res=>res)
    .then(data=>dispatch({
        type:AUTH_LOGIN,
        payload:data  
    }))
    .catch(err=>{
        dispatch({
            type:ERROR_AUTH,
            payload:err.response
        })
    })
}