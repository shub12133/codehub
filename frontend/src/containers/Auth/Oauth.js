import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {oauthAction} from '../../actions/authAction'
import setAuthToken from '../../utils/setAuthToken'
function Oauth(props) {
    console.log(props)
    const {oauthAction, auth :{isAuthenticated} ,history,loadUser} = props
    let { token ,success } = useParams();
    useEffect(()=>{
        oauthAction(token)
        setAuthToken(token)
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