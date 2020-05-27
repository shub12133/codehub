import React from 'react'

export default function importrepo() {
    return (
        <div>
        <img   src="https://d301sr5gafysq2.cloudfront.net/frontbucket/parcel/present/empty-folder.a8e0bea9.svg"/>
         <h2>Let's put some bits in your bucket</h2>
         <div className="cloneurl" style={{display:"flex"}}>
           <form>
               <select>
                   <option name="https">HTTPS</option>
                   <option name="ssh">SSH</option>

               </select>
               <input placeholder="git clone https://bharathza@bitbucket.org/bharathza/demoprepo.git" />
               <a className="btn">copy</a>
           </form>
         </div>
         </div>
    )
}
