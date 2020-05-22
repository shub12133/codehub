import {AUTH_USER , AUTH_LOGIN , ERROR_AUTH,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,USER_LOADED} from './types'
import axios from 'axios'
import {host,register,loginRoute,authDashboard} from '../utils/constants'
import setAuthToken from '../utils/setAuthToken'

//actioncreators 
export const loadUser = () => async dispatch =>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get(`${host}${authDashboard}`)
        dispatch({
            type : USER_LOADED,
            payload : res.data
        })
    }
    catch(err){
        dispatch({
            type : ERROR_AUTH
        })
    }
}


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
    history.push('/login')
}


export const login = (data) => async dispatch =>{
        const config = {
            headers : {
                'Content-Type' : "application/json"
            }
        }
    try {
        const res = await axios.post(`${host}${loginRoute}`, data,config)
        dispatch({
            type : LOGIN_SUCCESS,
            payload : res.data
        })
        dispatch(loadUser())
    }
    catch(err){
        const errors = err.response.data.errors
        if(errors){
            console.log(errors)
        }
        dispatch({
            type : LOGIN_FAIL
        })

    }
}

//logoout 
export const logout = (history)=> dispatch =>{
    dispatch({
        type : LOGOUT
    })
}