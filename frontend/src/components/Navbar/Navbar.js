import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import {
  Drawer,
  IconButton,
   Divider,
   Box,
  withStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";




import CssBaseline from '@material-ui/core/CssBaseline';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux'
import {logout} from '../../actions/authAction'

const drawerWidth = 240;

const styles = {
  toolbar: {
    minWidth: drawerWidth
  }
};

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




    // SideDrawer.propTypes = {
    //   classes: PropTypes.object.isRequired,
    //   open: PropTypes.bool.isRequired,
    //   onClose: PropTypes.func.isRequired
    // };



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


{/* 
      <Drawer anchor="right" open={open} variant="temporary" onClose={onClose}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Box
          pl={3}
          pr={3}
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <Typography variant="h6">A Sidedrawer</Typography>
          <IconButton
            onClick={onClose}
            color="primary"
            aria-label="Close Sidedrawer"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Divider />
    </Drawer> */}
        </>
    )
}


const mapStateToProps = state=>({
    auth : state.auth
})

export default connect(mapStateToProps,{logout})(Navbar)