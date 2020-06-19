 import React ,{useState,useEffect} from 'react'
 import ImportRepo from './importrepo'
 import {connect } from 'react-redux'
 import {Link} from 'react-router-dom'
 import {getProjects,getProjectCode} from '../../actions/gitActions'
    function Repo(props) {
      console.log("propsssss",props)
       const {user,repositories,getProjects,tree,getProjectCode,pid} = props
        const [state,setState]= useState({
          repo:{}
        })

       useEffect((props)=>{
      //  getProjects(user)
      //  .then(()=>{
      //   //  setState({
      //   //   //  repo:repositories.filter((currentRepo)=> props.match.params.repo)
      //   //  })
         
      //  })
       },[])

       const handleRepoCode =(data)=>{
         console.log(data,"data")
         console.log(props.match.params)
          const pid = user.userProjects.filter((p)=> p.name == props.match.params.repo)
         console.log("pid",pid)
        getProjectCode(pid[0].id,data.id)
       }
     return (
         <div>
             <div>

             </div>
             <div>
             <br/>
             <br/>
               <h6>Take the next steps for this new repository and its freshly added files</h6>
               <p>Copy and connect the repository locally so that you can push updates you make and pull changes others make. Enter git clone and the repository URL at your command line:</p>
 
               <blockquote style={{color:"grey"}}>{`git clone https://codehub.code.in/${props.match.params.username}/${props.match.params.repo}.git`}</blockquote>
               </div>

        <div style={{border:"1px solid grey",padding:"10px",width:"400px"}}>
        <h3>files</h3>

                <ul>
                  {tree !== null  && tree.map((item)=>(
                    <Link onClick={()=>handleRepoCode(item)} to={`${props.location.pathname}/${item.name}`}>
                    <li key={item.id}>{item.name} </li>

                    </Link>
                  ))}
                </ul>
        </div>

          </div>
     )
 }
 
 const mapStateToProps= state => ({
    repositories : state.projects.projects,
    user:state.users,
    tree:state.users.projectTree,
 })

export default  connect(mapStateToProps, { getProjects,getProjectCode})(Repo)