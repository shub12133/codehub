import {
   
    
    GET_PROJECTS,
    CREATE_PROJECT,
    GET_REPOSITORIES,
    CREATE_REPOSITORY,
    GITLAB_PROJECT_FAIL,
 } from "../actions/types";

const initialState = {
    
    projects:[],
    currentProject:{},
    repositories:[]
}

export function projects(state=initialState,action){
    const {type,payload} = action;

    switch(type){
        
        case CREATE_PROJECT:
            return{
                ...state,
                currentProject:payload
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects:payload
            }
        
        case GET_REPOSITORIES:
            return {
                ...state,
                repositories:payload
            }
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
        case GET_REPOSITORIES:
            return {
                ...state,
                projects:payload
            }

            default :
            return state
        
}
}