import React ,{useState,useEffect} from 'react';
import { Projects } from '@gitbeaker/browser'; // Just the Project Resource
import { UsersBundle } from 'gitlab';
import { Gitlab } from '@gitbeaker/browser'; // All Resources
import StarBorderIcon from '@material-ui/icons/StarBorder';
import BuildIcon from '@material-ui/icons/Build';
import {connect} from 'react-redux'
import {getProjects,getUser} from '../actions/gitActions'
const api = new Gitlab({
    host: `https://codehub.code.in`,
    token: 'cBsT5RSaeRYwDGiBL9iL',
  
  });
  
 

 
  function Explore(props) {
   
const {getProjects,projects,user,getUser} = props

    const [state, setState] = useState({
    projects:[],
    users:[]
  });


 useEffect(()=> {
  

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
 

 
  },[])
  

    return (
      <>
    
       <div className="container" >
       <h1>Explore Repositories</h1>
        {projects.length >0 && projects.map((project)=>(
    <div style={{border: "1px solid black", display:"flex" ,marginBottom:'10px'}} className="shadow">
      
      <img src={project.owner.avatar_url}  alt={project.name}/>
      <div style={{padding:"15px"}}>
      <h6>Project Name: {project.name}</h6>
        <h6>Owner : {project.owner.name}</h6>
        </div>
      </div>
  ))}
  </div>
       </>
      
    )
}

const mapStateToProps=(state)=>({
  projects:state.projects.projects,
  user:state.auth,
  
})

 export default connect(mapStateToProps,{getProjects,getUser})(Explore)