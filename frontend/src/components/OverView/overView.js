import React from 'react'

export default function overView() {
    return (
        <div style={{display:"col",justifyContent:"right"}} className="container">
             <div style={{alignItems:"center"}}>
                 <img  src="https://d301sr5gafysq2.cloudfront.net/frontbucket/parcel/present/empty-state.26a8b8b8.svg"/>
                 <h2>Here's where your work shines through</h2>
                 <p>Use this account as your personal sandbox to build personal projects, test out ideas, and more. Just start by creating or importing a repository. Ready to collaborate with others? Create a workspace to get started.</p>
             </div>
             <div>
                 <a href="/repo/create" className="btn btn-primary">Create repository </a>
                 <a href="/repo/import" className="btn btn-primary">import repository </a>
                 <a href="/workspace/create" className="btn btn-primary">Create workspace </a>

 
             </div>
        </div>
    )
}
