import React ,{useState,useEffect} from 'react';
import { Projects } from '@gitbeaker/browser'; // Just the Project Resource
import { UsersBundle } from 'gitlab';
import { Gitlab } from '@gitbeaker/browser'; // All Resources
import StarBorderIcon from '@material-ui/icons/StarBorder';
import BuildIcon from '@material-ui/icons/Build';
import {connect} from 'react-redux'
import {getProjects,getUser} from '../actions/gitActions'
<<<<<<< HEAD
// import useState from '../commonCss/CommonCss'
=======
>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
const api = new Gitlab({
    host: `https://codehub.code.in`,
    token: 'cBsT5RSaeRYwDGiBL9iL',
  
  });
  
 

 
  function Explore(props) {
<<<<<<< HEAD
    const {getProjects,projects,user,getUser} = props
=======
   
const {getProjects,projects,user,getUser} = props
>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e

    const [state, setState] = useState({
    projects:[],
    users:[]
  });


 useEffect(()=> {
<<<<<<< HEAD
  getProjects()
  .then((projects)=>{
    setState({
      ...state,
      projects:projects
    })
  }).catch((err)=>{
    console.log(err)
  })

 
  getUser(user.username)

=======
  

  getProjects()
  .then((projects)=>{
    setState({
      ...state,
      projects:projects
    })
  }).catch((err)=>{
    console.log(err)
  })
  getUser(user.user.username)
 
>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e

 
  },[])

    return (
        <div class="row">
        <div class="col-8">
        </div>
        <div class="col-4">
        <h5>Explore repositories</h5>
        {projects.length >0 && projects.map((project)=>(
    <div style={{textAlign:"left"}}>
      <h6>{project.name}</h6>
      <StarBorderIcon/><span>{project.star_count}</span>
           <BuildIcon/> <span>{project.forks_count}</span>
      </div>
  ))}
   </div>
      </div>
      
    )
}

const mapStateToProps=(state)=>({
  projects:state.projects.projects,
<<<<<<< HEAD
  user:state.auth.user,
=======
  user:state.auth,
>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
  
})

 export default connect(mapStateToProps,{getProjects,getUser})(Explore)