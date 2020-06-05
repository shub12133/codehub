  import React,{useState,useEffect} from 'react'
 import Repoform from './repoform'
import { connect } from 'react-redux'
import {createRepo} from '../../actions/authAction'
import header from '../Footer/Header'
const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});


  function CreateRepo(props) {
      
    return (
        <div >
          <img  src="https://d301sr5gafysq2.cloudfront.net/frontbucket/parcel/present/empty-state.26a8b8b8.svg"/>

        <div className="container" style={{border:"1px solid grey"}}>
        
             <div style={{display:"flex",justifyContent:"space-between"}}>
             
               <h4>Create a new repository</h4>
               <a href="/repo/import">import repository</a>
             </div>
             
            <Repoform/>
        </div>
        </div>
    )
}



export default connect(null,{})(CreateRepo)
