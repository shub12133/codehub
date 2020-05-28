import React ,{useState,useEffect} from 'react';
import { Projects } from '@gitbeaker/browser'; // Just the Project Resource
import { UsersBundle } from 'gitlab';
import { Gitlab } from '@gitbeaker/browser'; // All Resources
import StarBorderIcon from '@material-ui/icons/StarBorder';
import BuildIcon from '@material-ui/icons/Build';

const api = new Gitlab({
    host: 'https://gitlab.com',
    token: 'V569Zy248hRzHFFY21ym',
  
  });
  
  const services = new UsersBundle({
    host:   'https://gitlab.com ',
    token: '569Zy248hRzHFFY21ym'
  })
  
export default function Explore() {
    const [state, setState] = React.useState({
         projects:[]
       
     });

 useEffect(()=>{
    api.Projects.all({ maxPages: 2, perPage: 40 }).then((projects) => {
        console.log(projects);
        setState({
          projects:projects
  
        })
      }).catch((err)=>console.log(err))
    // services.Projects.all({ maxPages: 2, perPage: 40 })
  
  },[])
    return (
        <div class="row">
        <div class="col-8">this  col-8 part will be used to create the other content</div>
        <div class="col-4">
        <h5>Explore repositories</h5>
        {state.projects.map((project)=>(
    <div style={{textAlign:"left"}}>
      <h6>{project.path_with_namespace}</h6>
      <StarBorderIcon/><span>{project.star_count}</span>
           <BuildIcon/> <span>{project.forks_count}</span>
      </div>
  ))}
   </div>
      </div>
      
    )
}
