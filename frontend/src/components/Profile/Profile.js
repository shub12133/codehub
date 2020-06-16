import React,{useEffect ,useState} from 'react'
import { connect } from 'react-redux'
import {getUser} from '../../actions/gitActions'
 function Profile(props) {
   const {user,setUser} = useState({
       userdata:{}
   })
     const { profileData} = props

useEffect(()=>{
      
},[])
    return (
        <div>
        <img src={profileData.avatar_url}/>
      <h1>{profileData.name}</h1>
         </div>
    )
}


const mapStateToProps = state =>({
    
    profileData : state.users.gitlabdata[0]
  })

export default connect(mapStateToProps,{getUser})(Profile)

// image , username,bio,public_email,