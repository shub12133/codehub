import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {createProject,createRepositories} from '../../actions/gitActions'
import {connect } from 'react-redux'

 export default function ListTable(props) {
const {introName,item,createButton,handleProject,buttonText,linkTo,projects} = props



return (
        <div>
             <div  style={{display:"flex",textAlign:"center"}} className="intro">
            <h3>{introName}</h3>
            <Link to={linkTo} onClick={handleProject}   className="btn btn-info" >{buttonText}</Link>
            </div>

             <table >
             <tbody>

             
                 <tr>
                     <td>{item}</td>
                     <td>Description</td>

                 </tr>
                 {projects.length > 0 && projects.map((project)=>(
                    <tr style={{borderTop:"1px solid grey"}}>
                 <td>
                 <img src="https://d301sr5gafysq2.cloudfront.net/16f34e177e1f/img/projects/avatars/32/4.png"/>
                     <span>{project.name}</span>
                 </td>
                     <td>
                         <p> {project.description}</p>
                     </td>
                 </tr>
                 ))}
              
                
                 </tbody>
             </table>
        </div>
    )
}
    
 

 
