import React,{useState,useEffect} from 'react'

export default function Repoform() {
        
    const [repo,setRepo]=useState({
        workspace:"",
        projectName:"",
        repositoryName:"",
        privateRepo:false
    })
    const handleCange=(e)=>{
           setRepo({
               [e.target.name]:e.target.value
           })
    }
    return (
        <div style={{maxWidth:"960px"}}>
             <form>
             <hr/>
             <div style={{textAlign:"left",marginLeft:"15%"}}>
                 <label  for="workspace" >Workspace  :  </label>
                 <dropdown  id="workspace">
                     <select className="formInput" name="workspace" onChange={(e)=>handleCange(e)}>
                         <option>bharth</option>
                         <option>dev</option>

                     </select>
                 </dropdown>
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

               <a className="btn">Create repository</a>
               <a href="/overview">cancel</a>

               </div>
             </form>
        </div>
    )
}
