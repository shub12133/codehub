import React,{useState} from 'react'

export default function ListTable(props) {
const {introName,item,createButton} = props
return (
        <div>
             <div  style={{display:"flex",textAlign:"center"}} className="intro">
            <h3>{introName}</h3>
            <a className="btn btn-info" >{ createButton}</a>
            </div>

             <table >
             <tbody>

             
                 <tr>
                     <td>{item}</td>
                     <td>Description</td>

                 </tr>
                 <tr style={{borderTop:"1px solid grey"}}>
                 <td>
                 <img src="https://d301sr5gafysq2.cloudfront.net/16f34e177e1f/img/projects/avatars/32/4.png"/>
                     <span>reponame</span>
                 </td>
                     <td>
                         <p>this is the first repo</p>
                     </td>
                 </tr>
                 <tr style={{borderTop:"1px solid grey"}}>
                 <td>
                 <img src="https://d301sr5gafysq2.cloudfront.net/16f34e177e1f/img/projects/avatars/32/4.png"/>
                     <span>reponame</span>
                 </td>
                     <td>
                         <p>this is the first repo</p>
                     </td>
                 </tr>
                 <tr style={{borderTop:"1px solid grey"}}>
                 <td>
                      <span>reponame</span>
                 </td>
                     <td>
                         <p>this is the first repo</p>
                     </td>
                 </tr>
                 </tbody>
             </table>
        </div>
    )
}
    
