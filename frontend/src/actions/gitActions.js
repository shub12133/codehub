import axios from "axios";
 import {
    GITLAB_USER,
    PROJECTS_DATA,
    CREATE_REPOSITORY,
    GITLAB_USER_FAIL,
    GITLAB_PROJECT_FAIL,
    GET_PROJECTS,
    CREATE_PROJECT
} from "./types";


import { Gitlab } from '@gitbeaker/browser'; // All Resources
import { ProjectsBundle } from 'gitlab';


const api = new Gitlab({
    host: `https://codehub.code.in`,
    token: '79Sus8xpmuKSsmFkKw2D',
  
  });

  const services = new ProjectsBundle({
    host:   'https://codehub.code.in',
    token: '79Sus8xpmuKSsmFkKw2D'
  })



export const createProject=(data)=>async dispatch=>{
    try{
        console.log("hello")
        services.Projects.create({userId:2,name:'bharathcodesnot'})
        .then((repository)=>{
            dispatch({
                type:CREATE_PROJECT,
                payload:repository
            })
            console.log(repository)
        })
    } catch(err){
        console.log(err)
        dispatch({
            type : GITLAB_PROJECT_FAIL
        }); 
       }
    
}
  

export const createRepositories=(data)=>async dispatch=>{
    try{
        console.log("createRepositories")
        api.Repositories.create({userId:2,name:'bharathcodesnot'})
        .then((repository)=>{
            dispatch({
                type:CREATE_REPOSITORY,
                payload:repository
            })
            console.log(repository)
        })
    } catch(err){
        console.log(err)
        dispatch({
            type : GITLAB_PROJECT_FAIL
        }); 
       }
    
}
