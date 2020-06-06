import React ,{useState,useEffect} from 'react'
 import ImportRepo from './importrepo'
 import {connect } from 'react-redux'
 import {getProjects} from '../../actions/gitActions'
    function Repo(props) {
       const {user,repositories,getProjects} = props
 

       useEffect((props)=>{
       getProjects(user)
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
               <blockquote style={{color:"grey"}}>{`git clone https://codehub.code.in/${props.match.params.username}/${props.match.params.repo}.git`}</blockquote>
               <br/>
               <p>Here's where you'll find this repository's source files. </p>
             </div>
          </div>
     )
 }
 
 const mapStateToProps= state => ({
    repositories : state.projects.repositories,
    user:state.users,

})

export default  connect(mapStateToProps, { getProjects})(Repo)