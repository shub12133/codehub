import {
    GITLAB_USER_FAIL,

    GITLAB_USER,
    GITLAB_USER_DATA,
    GITLAB_USER_DATA_FAIL
} from "../actions/types";

const initialState = {
    
    gitlabdata:{},
    userCreated:false
}

export function users(state=initialState,action){
    const {type,payload} = action;

    switch(type){
        case  GITLAB_USER_DATA:
            return {
                ...state,
                gitlabdata:payload,
                

            }
        case GITLAB_USER:
            return {
                ...state,
                gitlabdata:payload,
                userCreated:true
            }
        case     GITLAB_USER_DATA_FAIL:
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