import React,{useEffect} from 'react'
import ListTable from '../table/listTable'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getProjects } from '../../actions/gitActions'
  function Repository(props) {
   const {repositories,createRepositories,user,getProjects} =props
    const  handleRepo=()=>{
        console.log("working")
         getProjects(user)
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
                    <Link to={`/user/${user.name}/${repositories.name}`}>
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
    repositories : state.projects.projects,
    user:state.auth.user
})

export default  connect(mapStateToProps, {getProjects})(Repository)




