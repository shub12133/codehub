import React,{useEffect} from 'react'
import ListTable from '../table/listTable'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';




import {getUserProjects,getUserProjectTree,getProjectId, resetProjectTree} from '../../actions/gitActions'
  function Repository(props) {
   const {repositories,user,getUserProjects,getUserProjectTree,getProjectId,resetProjectTree} =props
    const  handleRepo=()=>{
        console.log("working",user.id)
           }
        useEffect(()=>{
            getUserProjects(user.id)
            return(()=>{
                resetProjectTree()
            })
             
        },[])
    const handleBlob = (data)=>{
        getUserProjectTree(data)
        // getProjectId(data.id)

        
    }
    
    return (
        
    


            <div style={{border: "1px solid black", display:"flex" ,marginBottom:'100px'}} className="shadow">

        
            
                     <td id ="Repositories"></td>
            
           <div  style={{display:"inline-flex",textAlign:"",margin:"30px 50px",flexDirection:"spaceAround"}} className="intro">
           <tbody>

            <Link to='/repo/create'  className="btn btn-info" >Create repository</Link>
            </tbody>
            </div>

             <table style={{display:"inherit",alignItems:"center"}} >
                 
             <tbody style={{border:"1px solid black"}} style={{display:"initial"}}>
              
             <thead>

                 <tr>

                     <th scope="col">Repositories</th>
                     
                     <th scope="col">Description</th>

                 </tr>
                 </thead>

                 <br/>
                    
                 {repositories.length > 0 && repositories.map((repositories)=>(
                    <tr style={{borderTop:"1px solid grey"}}>
                    <Link onClick={()=>handleBlob(repositories.id)} to={`/user/${user.name}/${repositories.name}`}>
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

export default  connect(mapStateToProps, {getUserProjects,getUserProjectTree,getProjectId,resetProjectTree})(Repository)




