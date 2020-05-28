import React,{useEffect} from 'react'
import { Gitlab } from '@gitbeaker/browser'; // All Resources
import { Projects } from '@gitbeaker/browser'; // Just the Project Resource
import { UsersBundle } from 'gitlab';

const api = new Gitlab({
    host: 'https://gitlab.com',
    token: 'V569Zy248hRzHFFY21ym',

  });

  const services = new UsersBundle({
    host:   'https://gitlab.com ',
    token: '569Zy248hRzHFFY21ym'
  })

export default function Gitbreaker() {
    
 useEffect(()=>{
    api.Projects.all({ maxPages: 2, perPage: 40 }).then((projects) => {
        console.log(projects);
      }).catch((err)=>console.log(err))
    // services.Projects.all({ maxPages: 2, perPage: 40 })

  },[])

 
    


    return (
        <div>
            projects
        </div>
    )
}
