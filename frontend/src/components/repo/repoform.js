import React,{useState,useEffect} from 'react'
import {createRepo} from '../../actions/authAction'
import {connect} from 'react-redux'
import useStyles from '../../commonCss/CommonCss';

  function Repoform() {
        
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
           createRepo(repo.repositoryName)
    }
    return (
        <div style={{maxWidth:"960px"}}>
             <form>
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
        </div>
    )
}
const mapStateToProps= state => ({
    project : state.projects.projects
})

export default  connect(mapStateToProps, { createRepo})(Repoform)