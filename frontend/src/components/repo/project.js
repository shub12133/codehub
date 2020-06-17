import React,{useEffect} from 'react'
import ListTable from '../table/listTable'
import { ProjectsBundle } from 'gitlab';
import {createProject} from '../../actions/gitActions'
import {connect} from 'react-redux'
 import {getProjects,getUser} from '../../actions/gitActions'



  function Projects(props) {
     const {getProjects,createProject,user,projects}= props
     

     useEffect(()=>{
         getProjects(user)
     },[])
    const  handleProject=()=>{
 console.log("working")
 createProject(user)

    }

    
    return (
        <div>
            <ListTable introName="Projects"
            createButton="create Project"
            item="projects" 
            linkTo="/account/projects/create"
             handleProject={handleProject}
            buttonText="create Project"
            projects={projects}
            />
            {/* <button  onClick={()=>handleProject} >create project</button> */}
        </div>
    )
}

const mapStateToProps= state => ({
    projects : state.projects.projects,
    user:state.auth.user
})

export default  connect(mapStateToProps, {createProject,getProjects})(Projects)
<<<<<<< HEAD
=======



>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
