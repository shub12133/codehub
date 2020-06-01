import React,{useEffect} from 'react'
import ListTable from '../table/listTable'
import {connect} from 'react-redux'
import {createRepositories, } from '../../actions/gitActions'
  function Repository(props) {
   const {repositories,createRepositories,user} =props
    const  handleRepo=()=>{
        console.log("working")
        createRepositories(user)
       
           }
    return (
        <div style={{marginTop:"10ps"}} >
            <ListTable introName="Repositories"
            createButton="create Repository"
            item="repository" 
            linkTo="/repo/create"
            handleProject={handleRepo}

            buttonText="create repository"

            />
        </div>
    )
}

const mapStateToProps= state => ({
    repositories : state.projectsrepositories,
    user:state.auth.user
})

export default  connect(mapStateToProps, {createRepositories})(Repository)




