import {AUTH_USER , AUTH_LOGIN , ERROR_AUTH} from './types'
import axios from 'axios'
import {host,login,register} from '../utils/constants'


//actioncreators 

export const registerLocal = data => dispatch=>{
    console.log("action",data)
    axios.post(`${host}${register}` , data)
    .then(res => res)
    .then(data => ({
        type : AUTH_USER,
        payload : data
    }))
    .catch(err => {
        dispatch({
            type : ERROR_AUTH,
            payload : err.response
        })
    })
}

export const loginLocal=data=>dispatch=>{
    axios.post(`${host}${login}`,data)
    .then(res=>res)
    .then(data=>({
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