 import React ,{useState,useEffect} from 'react'
 import ImportRepo from './importrepo'
 import {connect } from 'react-redux'
 import {getProjects} from '../../actions/gitActions'

   function Repo(props) {
       const {user,repositories,getProjects} = props
 

       useEffect(()=>{
       getProjects(user)
       })
     return (
         <div>
             
          </div>
     )
 }
 
 const mapStateToProps= state => ({
    repositories : state.projects.repositories,
    user:state.users,

})

export default  connect(mapStateToProps, { getProjects})(Repo)