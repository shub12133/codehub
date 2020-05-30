import {
   
    PROJECTS_DATA,
    CREATE_REPOSITORY,
    GITLAB_PROJECT_FAIL
} from "../actions/types";

const initialState = {
    
    projects:[],
    repositories:[]
}

export function projects(state=initialState,action){
    const {type,payload} = action;

    switch(type){
        case  GITLAB_PROJECT_FAIL:
            return {
                ...state,
                projects:payload
            }
    case CREATE_REPOSITORY:
        return{
            ...state,
           projects:payload
        }

            default :
            return state
        
}
}