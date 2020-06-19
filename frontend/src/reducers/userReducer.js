import {
    GITLAB_USER_FAIL,
    GITLAB_USER_PROJECT_FAIL,
    GITLAB_USER,
    GITLAB_USER_DATA,
    GITLAB_USER_DATA_FAIL,
    PROJECTS_DATA,
    PROJECT_TREE,
    PROJECT_REPO_CODE,
    CURRENT_PROJECT_ID ,
    RESET_PROJECT_TREE
} from "../actions/types";

const initialState = {
    
    gitlabdata:{},
    userCreated:false,
    userProjects:[],
    projectTree:null,
    code:null,
    currentProjectId:null
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
        case CURRENT_PROJECT_ID:
            return {
                ...state,
                currentProjectId:payload
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
        case PROJECT_TREE:
                return {
                    ...state,
                    projectTree:payload
                }
        case RESET_PROJECT_TREE:
            return {
                ...state,
                projectTree:null
            }
        case PROJECT_REPO_CODE:
            return {
                ...state,
                code:payload
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