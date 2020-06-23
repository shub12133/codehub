import React ,{useState,useEffect} from 'react'

import {connect } from 'react-redux'
import { CodeBlock, dracula } from 'react-code-blocks'

 function Repocode(props) {
    const {code} = props

    return (
        <div>
        <h2>code</h2>
        <div style={{backgroundColor:"#F6F8FA",height:"20px",border:"1px solid grey"}}></div>

            {code !== null && 
            /* <div style={{border:"1px solid grey",textAlign:"left" }}>
                {code}
            </div>} */

            <CodeBlock
      text={code}
      language="html"
      showLineNumbers={true}
      theme={dracula}
      wrapLines
    />}
        </div>
    )
}

const mapStateToProps = (state)=>({
    code:state.users.code
})
export default  connect(mapStateToProps, { })(Repocode)