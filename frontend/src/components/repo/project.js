import React,{useEffect} from 'react'
import ListTable from '../table/listTable'
import { ProjectsBundle } from 'gitlab';
import {createProject} from '../../actions/gitActions'
import {connect} from 'react-redux'
 



  function Projects(props) {
     const {projects,createProject,user}= props
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
            />
            {/* <button  onClick={()=>handleProject} >create project</button> */}
        </div>
    )
}

const mapStateToProps= state => ({
    projects : state.projects.projects,
    user:state.auth.user
})

export default  connect(mapStateToProps, {createProject})(Projects)



