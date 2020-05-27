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
        <div>
             <form>
                 <label for="workspace" >Workspace  :  </label>
                 <dropdown id="workspace">
                     <select name="workspace" onChange={(e)=>handleCange(e)}>
                         <option>bharth</option>
                         <option>dev</option>

                     </select>
                 </dropdown>
                 <br/>
               <label for="pname">Project name :</label>
               <input name="projectName" id="pname" type="text" onChange={(e)=>handleCange(e)}/>
               <br/>
               <label for="rname">Repository name :</label>
               <input name="repositoryName" id="rname" type="text" onChange={(e)=>handleCange(e)}/>
               <br/>
               <label for="access"> Access level :</label>
               <input type="checkbox" id="access" name="privateRepo" onChange={(e)=>handleCange(e)} />
               <span>private repo</span>
               <br/>

               <a className="btn btn-primary">Create repository</a>
               <a href="/overview">cancel</a>
             </form>
        </div>
    )
}
