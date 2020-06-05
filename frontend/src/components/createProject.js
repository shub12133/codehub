import React ,{useState,useEffect} from 'react'
import Repoform from './repo/repoform'
import {createRepo} from '../actions/authAction'

export default function CreateProject() {
     
        const [repo,setRepo]=useState({
          workspace:"",
          projectName:"",
          repositoryName:"",
          privateRepo:false
      })
    
    

      const handleCange=(e)=>{
        e.preventDefault()
        setRepo({
            [e.target.name]:e.target.value
        })
        createRepo(repo.projectName)
    }

    const sendReq = ()=>{
      createRepo(repo.projectName)

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
             <form onSubmit={()=>sendReq()}>
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
               <a href="/overview">cancel</a>

               </div>
             </form>
        </div>   </div>
         </div>
    )
    }