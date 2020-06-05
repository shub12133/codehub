import React,{useState} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



  
export default function ListTable(props) {
const {introName,item,createButton,handleProject,buttonText,linkTo} = props
return (
        <div>
             <div  style={{display:"flex",textAlign:"center"}} className="intro">
            <h3>{introName}</h3>
            <a href={linkTo} onClick={handleProject}   className="btn btn-info" >{buttonText}</a>
            </div>

            <table class="table table-bordered">
 
             <tbody>

            

                 <tr>
                     <td>{item}</td>

                     <th scope="col">Description</th>

                 </tr>
                 <br/>
                 <tr style={{borderTop:"1px solid grey"}}>
                 <td>
                 <img src="https://d301sr5gafysq2.cloudfront.net/16f34e177e1f/img/projects/avatars/32/4.png"/>
                 

                     <span>reponame</span>
                     <br/>
                 </td>
                     <td>
                     
                         <p>this is the first repo</p>
                        

                         

                     </td>
                 </tr>
                 <tr style={{borderTop:"1px solid grey"}}>
                 <td>
                 <img src="https://d301sr5gafysq2.cloudfront.net/16f34e177e1f/img/projects/avatars/32/4.png"/>

                     <span>reponame</span>
                    

                     <br/>
                 </td>
                     <td>
                     

                         <p>this is the first repo</p>
                     </td>
                 </tr>
                 <tr style={{borderTop:"1px solid grey"}}>
            
                    
                 </tr>
                 </tbody>
             </table>
        </div>
    )
}