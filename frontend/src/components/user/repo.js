 import React ,{useState,useEffect} from 'react'
 import ImportRepo from './importrepo'
 import {connect } from 'react-redux'
 import {Link} from 'react-router-dom'
 import {getProjects} from '../../actions/gitActions'
    function Repo(props) {
       const {user,repositories,getProjects,tree} = props
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
     return (
         <div>
             <div>

             </div>
             <div>
               <h6>Take the next steps for this new repository and its freshly added files</h6>
               <p>Copy and connect the repository locally so that you can push updates you make and pull changes others make. Enter git clone and the repository URL at your command line:</p>
               <p>link here</p>
               <br/>
               {/* <blockquote style={{color:"grey"}}>{state.http_url_to_repo}</blockquote> */}

               <blockquote style={{color:"grey"}}>{`git clone https://codehub.code.in/${props.match.params.username}/${props.match.params.repo}.git`}</blockquote>
               <br/>
               <p>Here's where you'll find this repository's source files. </p>
             </div>
             <p>files inside the repo</p>

        <div style={{border:"2px solid black",padding:"10px"}}>
                <ul>
                  {tree !== null  && tree.map((item)=>(
                    <Link>
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
    tree:state.users.projectTree
})

export default  connect(mapStateToProps, { getProjects})(Repo)