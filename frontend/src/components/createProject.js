import React ,{useState,useEffect} from 'react'
import Repoform from './repo/repoform'
import {createRepo, createProject} from '../actions/gitActions'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
  function CreateProject(props) {
     const {createRepo,createProject}=props
        const [repo,setRepo]=useState({
          workspace:"",
          projectName:"",
          repositoryName:"",
          privateRepo:false
      })
    
    

      const handleCange=(e)=>{
        e.preventDefault()
        setRepo({
          ...repo,
            [e.target.name]:e.target.value
        })
      }

    const sendReq = (e)=>{
      e.preventDefault()
      createProject(repo)

    }
    return (
        <div>
                      <img  src="https://d301sr5gafysq2.cloudfront.net/frontbucket/parcel/present/empty-state.26a8b8b8.svg"/>

        <div className="container" style={{border:"1px solid grey"}}>
        
        <div style={{display:"flex",justifyContent:"space-between"}}>
        
          <h4>Create a new Project</h4>
          <a href="/repo/import">import repository</a>
        </div>
        
        <div style={{maxWidth:"960px"}}>
             <form onSubmit={sendReq}>
             <hr/>
             <div style={{textAlign:"left",marginLeft:"15%"}}>
                 <label  for="workspace" >Workspace  :  </label>
                      <select id="workspace" className="formInput" name="workspace" onChange={(e)=>handleCange(e)}>
                         <option>bharth</option>
                         <option>dev</option>

                     </select>
                  <br/>
               <label for="pname">Project name :</label>
               <input className="formInput" name="projectName" id="pname" type="text" onChange={(e)=>handleCange(e)}/>
               <br/>
               <label for="rname">Repository name :</label>
               <input className="formInput" name="repositoryName" id="rname" type="text" onChange={(e)=>handleCange(e)}/>
               <br/>
               <label for="access"> Access level :</label>
               <input type="checkbox" id="access" name="privateRepo" onChange={(e)=>handleCange(e)} />
               <span>private repo</span>
               <br/>

               <button type="submit" className="btn" >Create repository</button>
               <Link to="/overview">cancel</Link>

               </div>
             </form>
        </div>   </div>
         </div>
    )
    }

<<<<<<< HEAD
    export default connect(null,{createRepo,createProject})(CreateProject)
=======
    export default connect(null,{createRepo,createProject})(CreateProject)
>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
