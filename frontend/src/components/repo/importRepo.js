import React,{useState,useEffect} from 'react'
import Repoform from './repoform'
import useStyles from '../../commonCss/CommonCss';

export default function importRepo() {
    return (
        <div>
              <img  src="https://d301sr5gafysq2.cloudfront.net/frontbucket/parcel/present/empty-state.26a8b8b8.svg"/>

<div className="container" style={{border:"1px solid grey"}}>

     <div style={{display:"flex",justifyContent:"space-between"}}>
     
       <h4>Import a repository</h4>
       <a href="/repo/create">create repository</a>
     </div>
     <Repoform/>

        </div>
        </div>
    )
}
