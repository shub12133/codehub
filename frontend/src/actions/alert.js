import {SET_ALERT,REMOVE_ALERT} from './types'

import {v4 as uuid} from "uuid"

export const setAlert=(msg,alertType) =>dispacth=>{
        const id = uuid
        dispacth({
            type : SET_ALERT,
            payload : {msg ,alertType , id}
        })

        setTimeout(()=>{
            dispacth( {
                type : REMOVE_ALERT , payload :id
            })
        },3000)
}