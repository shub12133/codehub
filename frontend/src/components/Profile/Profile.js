// import React,{useState,useEffect} from 'react'


// const [Profile,SetProfile]=useState({
//     userId:"",
//     userImage:"",
//     description:"",
//     repos:"",
//     createdOn:"",
//     updatedOn:"",
// })
// const handleCange=(e)=>{
//        setRepo({
//            [e.target.name]:e.target.value
//        })
//        SetProfile(profile.profile)
// }
// return (
//     <div style={{maxWidth:"960px"}}>
//          <form>
//          <hr/>
//          <div style={{textAlign:"left",marginLeft:"15%"}}>
//              <label  for=" Profile" >Profile  :  </label>
//                   <select id="profile" className="formInput" name="profile" onChange={(e)=>handleCange(e)}>
                     
//                  </select>
//               <br/>
//            <label for="id"> User ID:</label>
//            <input className="formInput" name="UserID" id="id" type="text" onChange={(e)=>handleCange(e)}/>
//            <br/>
//            <label for="img">User Image:</label>
//            <input className="formInput" name="User image" id="rname" type="text" onChange={(e)=>handleCange(e)}/>
//            <br/>
//            {/* <label for="access"> Access level :</label>
//            <input type="checkbox" id="access" name="privateRepo" onChange={(e)=>handleCange(e)} />
//            <span>private repo</span>
//            <br/>

//            <button type="submit" className="btn" >Create repository</button>
//            <a href="/overview">cancel</a> */}
const mapStateToProps = state =>({
    
    getUsername : state.auth
  })

export default connect(mapStateToProps,{getUser})(Profile)

//            </div>
//          </form>
//     </div>
// )

// const mapStateToProps= state => ({
// project : state.projects.projects
// })

// export default  connect(mapStateToProps, { createRepo})(Repoform)
