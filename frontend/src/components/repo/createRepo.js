import React,{useState,useEffect} from 'react'
 import Repoform from './repoform'
export default function CreateRepo(props) {
  
    return (
        <>
          <img  src="https://d301sr5gafysq2.cloudfront.net/frontbucket/parcel/present/empty-state.26a8b8b8.svg"/>

        <div className="container" style={{border:"1px solid grey"}}>
        
             <div style={{display:"flex",justifyContent:"space-between"}}>
             
               <h4>Create a new repository</h4>
               <a href="/repo/import">import repository</a>
             </div>
             
            <Repoform/>
        </div>
        </>
    )
}
