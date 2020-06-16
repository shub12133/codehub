import {
    GITLAB_USER_FAIL,
    GITLAB_USER_PROJECT_FAIL,
    GITLAB_USER,
    GITLAB_USER_DATA,
    GITLAB_USER_DATA_FAIL,
    PROJECTS_DATA,
} from "../actions/types";

const initialState = {
    
    gitlabdata:{},
    userCreated:false,
    userProjects:[]
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
        case PROJECTS_DATA:
            return {
                ...state,
                userProjects:payload

            }
       case GITLAB_USER_PROJECT_FAIL:
       return{
           ...state,

       }

            default :
            return {
                ...state,
                
            }
        
}
}