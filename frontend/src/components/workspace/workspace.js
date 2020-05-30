import React ,{useState} from 'react'

export default function Workspace() {
    const [state,setState]=useState({
      workSpaceName:"",
      workSpaceId:null,
      privateWorkspace:false
    })
    const handleCange=(e)=>{
        setState({
            [e.target.name]:e.target.value
        })
 }
    return (

        <div>
            <img src="https://d301sr5gafysq2.cloudfront.net/frontbucket/parcel/present/empty-state.26a8b8b8.svg"/>
            <h2>Create a workspace</h2>
            <p>A workspace is the place where you can store and share your code and content</p>
             

            <form>
            <label for="wname">Workspace name :</label>
               <input className="formInput" name="workspaceName" id="wname" type="text" onChange={(e)=>handleCange(e)}/>
               <br/>
               <label for="wId">workspace Id :</label>
               <input className="formInput" placeholder="codehub.org/"/>
               <input className="formInput" name="workSpaceId" id="wId" type="text" onChange={(e)=>handleCange(e)}/>
               <br/>
               <span>This will be the URL for your workspace</span>
               <br/>
                <input  type="checkbox" id="access" name="privateRepo" onChange={(e)=>handleCange(e)} />
               <span>keep this workspace private</span>
               <br/>

               <a className="btn ">Create repository</a>
               <a href="/overview">cancel</a>
            </form>
        </div>
    )
}
