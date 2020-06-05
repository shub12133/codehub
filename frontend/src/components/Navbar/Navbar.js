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
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 2,
        padding: 7,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `3px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.6),
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
       
        <Button onClick={()=>logout(history)} color="dark" variant="outlined" className={classes.link}>
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
      <AppBar position="static" color="blue" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="dark" noWrap className={classes.toolbarTitle}>
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