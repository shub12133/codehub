import axios from "axios";
 import {
    GITLAB_USER,
    PROJECTS_DATA,
    CREATE_REPOSITORY,
    GET_REPOSITORIES,
    GITLAB_USER_FAIL,
    GITLAB_PROJECT_FAIL,
    GET_PROJECTS,
    CREATE_PROJECT
} from "./types";


import { Gitlab } from '@gitbeaker/browser'; // All Resources
import { ProjectsBundle } from 'gitlab';


const api = new Gitlab({
    host: `https://codehub.code.in`,
    token: 'cBsT5RSaeRYwDGiBL9iL',
  
  });

  const services = new ProjectsBundle({
    host:   'https://codehub.code.in',
    token: 'cBsT5RSaeRYwDGiBL9iL'
  })



export const createProject=(data,user)=>async dispatch=>{
    try{
        console.log("hello")
        services.Projects.create({userId:data.id,path:data.repositoryName})
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

export const getProjects=(data)=>async dispatch=>{
    try{
        console.log("getProjects")
        services.Projects.all()
        .then((repository)=>{
            dispatch({
                type:GET_PROJECTS,
                payload:repository
            })
            console.log("80g= gitactions",repository)
        })
    } catch(err){
        console.log(err)
        dispatch({
            type : GITLAB_PROJECT_FAIL
        }); 
       }
    
}


//create user into giutlab 
export const createUser=(data)=> async dispatch=>{
    try{
      let users= await api.Users.create({name:data.name,username:data.username,email:data.email,password:data.password,admin:true})
    
        dispatch({
            type:GITLAB_USER,
            payload:users
        })
        console.log(users)
        
    }catch(err){
        console.log(err)
        dispatch({
            type : GITLAB_USER_FAIL
        });
    }
}


export const createRepo=(data)=>async dispatch=>{
    try{
        console.log("hello")
        services.Projects.create({userId:2,name:'bharathcodesnot'})
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


export const getUser=(data)=>async dispatch=>{
    try{
        console.log(data)
        const userName=data
        api.Users.search({ username:data})
        .then((user)=>{
            dispatch({
                type:GITLAB_USER,
                payload:user
            })
            console.log(user)
        })
    } catch(err){
        console.log(err)
        dispatch({
            type : GITLAB_USER_FAIL
        }); 
       }
    
}


