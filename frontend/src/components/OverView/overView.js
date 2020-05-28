import React from 'react'

export default function overView() {
    return (
        <div style={{textAlign:"center",marginTop:"20px" ,maxWidth:"900px"}}  className="container">
             <div >
                 <img  src="https://d301sr5gafysq2.cloudfront.net/frontbucket/parcel/present/empty-state.26a8b8b8.svg"/>
                 <h4 style={{marginTop:"20px"}} >Here's where your work shines through</h4>
                 <p style={{marginTop:"20px"}} >Use this account as your personal sandbox to build personal projects, test out ideas, and more. Just start by creating or importing a repository. Ready to collaborate with others? Create a workspace to get started.</p>
             </div>
             <div style={{marginTop:"20px"}}>
                 <a href="/repo/create" style={{color:"blue"}} className="btn hoverbtn">Create repository </a>
                 <a href="/repo/import" style={{color:"grey"}} className="btn hoverbtn">import repository </a>
                 <a href="/workspace/create" style={{color:"grey"}}  className="btn">Create workspace </a>

 
             </div>
        </div>
    )
}
