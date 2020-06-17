import axios from "axios";
 import {
    GITLAB_USER,
    PROJECTS_DATA,
    CREATE_REPOSITORY,
    GET_REPOSITORIES,
    GITLAB_USER_FAIL,
    GITLAB_PROJECT_FAIL,
    GET_PROJECTS,
    CREATE_PROJECT,
    GITLAB_USER_DATA,
    GITLAB_USER_DATA_FAIL,
    GITLAB_USER_PROJECT_FAIL
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



<<<<<<< HEAD
export const createProject=(data,user)=>async dispatch=>{
    try{
        console.log("hello")
        services.Projects.create({userId:22,name:data.projectName})
=======
export const createProject=(data,userId)=>async dispatch=>{
    try{
        console.log("hello",userId)
        services.Projects.create({userId:userId,name:data.projectName})
>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
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
<<<<<<< HEAD
        console.log("getProjects")
        api.Users.projects(22)
=======
        console.log("getProjects",data)
        services.Projects.all(data)
>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
        .then((repository)=>{
            dispatch({
                type:GET_PROJECTS,
                payload:repository
            })
            console.log("user 6 pro",repository)
        })
    } catch(err){
        console.log(err)
        dispatch({
            type : GITLAB_PROJECT_FAIL
        }); 
       }
    
}

<<<<<<< HEAD
=======
export const getUserProjects=(data)=>async dispatch=>{
    try{
        console.log("UserProjects",data)
        api.Users.projects(data)
        .then((repository)=>{
            dispatch({
                type:PROJECTS_DATA,
                payload:repository
            })
            console.log("user 6 pro",repository)
        })
    } catch(err){
        console.log(err)
        dispatch({
            type : GITLAB_USER_PROJECT_FAIL
        }); 
       }
    
}


>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e

//create user into giutlab 
export const createUser=(data)=> async dispatch=>{
    try{
      let users= await api.Users.create({name:data.name,username:data.username,email:data.email,password:data.password,admin:false})
<<<<<<< HEAD
    
=======
      console.log("dataaa",users)

>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
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
<<<<<<< HEAD
        services.Projects.create({userId:2,name:'bharathcodesnot'})
=======
        services.Projects.create({userId:1,name:'bharathcodesnot'})
>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
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


<<<<<<< HEAD
export const getUser=(user)=>async dispatch=>{
    try{
        console.log(user)
        // const userName=data
        api.Users.search(user.username)
        .then((user)=>{
=======
export const getUser=(username)=>async dispatch=>{
    try{
        console.log(username)
        // const userName=data
        api.Users.search(username)
        .then((user)=>{
        //     user.filter((userSingle)=>user.name ===user)
>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
            dispatch({
                type:GITLAB_USER_DATA,
                payload:user
            })
<<<<<<< HEAD
            console.log(user)
=======
            console.log("89",user)
>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
        })
    } catch(err){
        console.log(err)
        dispatch({
            type : GITLAB_USER_DATA_FAIL
        }); 
       }
    
<<<<<<< HEAD
}
=======
}


>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
