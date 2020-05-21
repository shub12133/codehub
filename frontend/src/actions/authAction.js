import {AUTH_USER , AUTH_LOGIN , ERROR_AUTH} from './types'
import axios from 'axios'
import {host,register} from '../utils/constants'


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