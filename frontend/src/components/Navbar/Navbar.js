import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux'
import {logout} from '../../actions/authAction'
const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    }
}))
 function Navbar({auth : {isAuthenticated , loading} ,logout}) {
    const classes = useStyles();
    let history = useHistory();
    const handleClickLogin = ()=>{
            history.push('/login')
    }
    const handleDashoard =()=>{
      history.push('/dashboard')
    }
    const authLinks = (
        <nav>
        <Link variant="button" color="textPrimary" onClick={handleDashoard} className={classes.link}>
          dashboard
        </Link>
       
        <Button onClick={()=>logout(history)} color="primary" variant="outlined" className={classes.link}>
            Logout
          </Button>
      </nav>
    )
    const guestLinks = (
        <>
        <Button onClick={handleClickLogin} color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </>
    )

    return (
        <>
    <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Code Hub
          </Typography>
        
        {
            !loading && (
            <>{isAuthenticated ? authLinks : guestLinks}</>
            )
        }
          
        </Toolbar>
      </AppBar>
        </>
    )
}

const mapStateToProps = state=>({
    auth : state.auth
})

export default connect(mapStateToProps,{logout})(Navbar)