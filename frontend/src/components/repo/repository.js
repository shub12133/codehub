import React,{useEffect} from 'react'
import ListTable from '../table/listTable'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getUserProjects,getUserProjectTree,getProjectId } from '../../actions/gitActions'
  function Repository(props) {
   const {repositories,user,getUserProjects,getUserProjectTree,getProjectId} =props
    const  handleRepo=()=>{
        console.log("working",user.id)
           }
        useEffect(()=>{
            getUserProjects(user.id)

        },[])
    const handleBlob = (data)=>{
        getUserProjectTree(data)
        // getProjectId(data.id)
    }
    return (
        <div style={{marginTop:"10ps"}} >

           <div  style={{display:"flex",textAlign:"center"}} className="intro">
            <h3>Repositories</h3>
            <Link to='/repo/create'  className="btn btn-info" >Create repository</Link>
            </div>

             <table >
             <tbody>

             
                 <tr>
                     <td>Repositories</td>
                     <td>Description</td>

                 </tr>
                 {repositories.length > 0 && repositories.map((repositories)=>(
                    <tr style={{borderTop:"1px solid grey"}}>
                    <Link onClick={()=>handleBlob(repositories.id)} to={`/user/${user.name}/${repositories.name}`} params={{ repoId: `${repositories.id}` }}>
                 <td>
                 <img src="https://d301sr5gafysq2.cloudfront.net/16f34e177e1f/img/projects/avatars/32/4.png"/>
                     <span>{repositories.name}</span>
                 </td>
                     <td>
                         <p> {repositories.description}</p>
                     </td>
                     </Link>
                 </tr>
                 ))}
              
                
                 </tbody>
             </table>
        </div>
    )
}

const mapStateToProps= state => ({
    repositories : state.users.userProjects,
    user:state.users.gitlabdata[0]
})

export default  connect(mapStateToProps, {getUserProjects,getUserProjectTree,getProjectId})(Repository)




