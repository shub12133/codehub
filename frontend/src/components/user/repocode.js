import React ,{useState,useEffect} from 'react'

import {connect } from 'react-redux'
 
 function Repocode(props) {
    const {code} = props

    return (
        <div>
            {code !== null && 
            <div>
                {code}
            </div>}
        </div>
    )
}

const mapStateToProps = (state)=>({
    code:state.users.code
})
export default  connect(mapStateToProps, { })(Repocode)