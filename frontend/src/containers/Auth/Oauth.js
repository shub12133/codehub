import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {oauthAction} from '../../actions/authAction'
function Oauth(props) {
    console.log(props)
    const {oauthAction, auth :{isAuthenticated} ,history,loadUser} = props
    let { token ,success } = useParams();
    useEffect(()=>{
        oauthAction(token)
    },[])
    return (
        <div>
            <center>
                pls wait ...
                {token}
            </center>
        </div>
    )
}
const mapStateToProps = state=>({
    auth : state.auth
})
export default  connect(mapStateToProps, {oauthAction})(Oauth)