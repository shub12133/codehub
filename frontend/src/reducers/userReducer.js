import {
    GITLAB_USER_FAIL,

    GITLAB_USER
} from "../actions/types";

const initialState = {
    
    gitlabdata:{},
    userCreated:false
}

export function users(state=initialState,action){
    const {type,payload} = action;

    switch(type){
        case  GITLAB_USER:
            return {
                ...state,
                gitlabdata:payload,
                userCreated:true

            }
        case     GITLAB_USER_FAIL:
            return {
                ...state,
                userCreated:false
            }


            default :
            return {
                ...state,
                
            }
        
}
}