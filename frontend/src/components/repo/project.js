import React,{useEffect} from 'react'
import ListTable from '../table/listTable'
import { ProjectsBundle } from 'gitlab';
import {createRepo} from '../../actions/authAction'
import {connect} from 'react-redux'
const services = new ProjectsBundle({
  host:   'https://codehub.code.in',
  token: '79Sus8xpmuKSsmFkKw2D'
})



  function Repository(props) {
     const {projects,createRepo}= props
    const  handleProject=()=>{
 console.log("working")
 createRepo()

    }
    useEffect(()=>{
    },[])
    return (
        <div>
            <ListTable introName="Projects"
            createButton="create Project"
            item="projects" 
            handleProject

            />
            <button  onClick={handleProject} >create porject</button>
        </div>
    )
}

const mapStateToProps= state => ({
    projects : state.projects.projects
})

export default  connect(mapStateToProps, {createRepo})(Repository)



