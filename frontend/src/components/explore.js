import React ,{useState,useEffect} from 'react';
import { Projects } from '@gitbeaker/browser'; // Just the Project Resource
import { UsersBundle } from 'gitlab';
import { Gitlab } from '@gitbeaker/browser'; // All Resources
import StarBorderIcon from '@material-ui/icons/StarBorder';
import BuildIcon from '@material-ui/icons/Build';

const api = new Gitlab({
    host: `https://codehub.code.in`,
    token: '79Sus8xpmuKSsmFkKw2D',
  
  });
  
 

 

export default function Explore() {
   
  const [state, setState] = useState({
    projects:[],
    users:[]
  });


 useEffect(()=> {
    //  projects()
    // .then((project)=>{
    //   setState({
    //     projects:project
    //   })
    // })

    // users()
    // .then((user)=>{
    //   setState({
    //     users:user
    //   })
    // })
    api.Projects.all({ maxPages: 2, perPage: 40 }).then((projects) => {
      console.log(projects);
      setState({
        ...state,
        projects:projects
        
      })
    }).catch((err)=>console.log(err))
     
    api.Users.all({ maxPages: 2, perPage: 40 }).then((users) => {
      console.log(users);
      setState({
        ...state ,
        users:users

      })
    }).catch((err)=>console.log(err))


 api.Users.show(6066994)
 .then((user)=>{
   console.log(user)
 }).catch((err)=>console.log(err))

  },[])
    return (
        <div class="row">
        <div class="col-8">
          {state.users.length >0 && state.users.map((user)=>(
            <>
            <img style={{borderRadius:"50%", width:"200px"}} src={user.avatar_url}/>
            <h5>{user.name}</h5>
             <p>{user.id}</p>
            </>
          ))}
        </div>
        <div class="col-4">
        <h5>Explore repositories</h5>
        {state.projects.map((project)=>(
    <div style={{textAlign:"left"}}>
      <h6>{project.name}</h6>
      <StarBorderIcon/><span>{project.star_count}</span>
           <BuildIcon/> <span>{project.forks_count}</span>
      </div>
  ))}
   </div>
      </div>
      
    )
}
