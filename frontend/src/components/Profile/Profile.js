import React,{useEffect ,useState} from 'react'
import { connect } from 'react-redux'
import {getUser} from '../../actions/authAction'
 function Profile(props) {
   const {user,setUser} = useState({
       userdata:{}
   })
     const {getUsername,getUser} = props

useEffect(()=>{
   getUser(getUsername.user.username)
     
},[])
    return (
        <div>
          profile data
        </div>
    )
}


const mapStateToProps = state =>({
    
    getUsername : state.auth
  })

export default connect(mapStateToProps,{getUser})(Profile)

// image , username,bio,public_email,