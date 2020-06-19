import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "../../shared/components/NavigationDrawer";

<<<<<<< HEAD
const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

function NavBar(props) {
  const {
    classes,
    openRegister,
    openLogin,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />
=======
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
>>>>>>> e6138897b8707a50047ac4f53cde2857402f8a53
    },
    
    {
      name: "Register",
      onClick: openRegister,
      icon: <HowToRegIcon className="text-white" />
    },
    {
      name: "Login",
      onClick: openLogin,
      icon: <LockOpenIcon className="text-white" />
    }
<<<<<<< HEAD
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
=======
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
>>>>>>> e6138897b8707a50047ac4f53cde2857402f8a53
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="primary"
            >
              Code
            </Typography>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="secondary"
            >
              Hub
            </Typography>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map(element => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
<<<<<<< HEAD
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired
};
=======


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
>>>>>>> e6138897b8707a50047ac4f53cde2857402f8a53

export default withStyles(styles, { withTheme: true })(memo(NavBar));
