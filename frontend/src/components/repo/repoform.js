import React,{useState,useEffect} from 'react'
import {createRepositories,createProject,getUser} from '../../actions/gitActions'
import {connect} from 'react-redux'
<<<<<<< HEAD
import {Link} from 'react-router-dom'
  function Repoform(props) {
        const {createProject,createRepositories,user,getUser} = props
=======
import {Link,useHistory} from 'react-router-dom'
  function Repoform(props) {
      const history = useHistory()
        const {createProject,user,getUser} = props
>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
    const [repo,setRepo]=useState({
        workspace:"",
        projectName:"",
        repositoryName:"",
        privateRepo:false
    })

   
    const handleCange=(e)=>{
           setRepo({
               ...repo,
               [e.target.name]:e.target.value
           })
     }

    const handleCall = (e)=>{
        e.preventDefault()
<<<<<<< HEAD
        alert('yo')
        createProject(repo,user)
        
=======
        console.log("jjj",user)
         createProject(repo,user[0].id)
        history.push(`/user/${user[0].username}/${repo.repositoryName}`)
>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
    }

    const handleCheck = (e)=>{
        setRepo({
            ...repo,
            privateRepo:true
        })
    }
    return (
        <div style={{maxWidth:"960px"}}>
             <form onSubmit={handleCall}>
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
               <input type="checkbox" onClick={handleCheck} id="access" name="privateRepo" onChange={(e)=>handleCange(e)} />
               <span>private repo</span>
               <br/>

               <button type="submit" className="btn" >Create repository</button>
               <Link to="/overview">cancel</Link>

               </div>
             </form>
        </div>
    )
}
const mapStateToProps= state => ({
    project : state.projects.projects,
<<<<<<< HEAD
    user:state.auth.user

=======
    user:state.users.gitlabdata
   
>>>>>>> f386460f21effa76d0d3f5f5596e6a5ac8d65b8e
})

export default  connect(mapStateToProps, { createRepositories,createProject})(Repoform)