import React ,{useState,useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import css from '../App.css'


import {Link} from 'react-router-dom'
import OverView from './OverView/overView'

const pageLinks = ['OverView','Repos', 'Profile', 'Pull request', 'Review']
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});





export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
     left: false,
     projects:[]
    
  });
 const [component,setComponent] =useState({

 })




  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
  
    style={{backgroundColor:"rgb(7, 71, 166)",height:"100%"}}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Link className="linkClass" to="/dashboard/explore">
           <ListItem button >
          <ListItemText primary={"Explore"} />
           </ListItem>
           </Link>

          <Link className="linkClass" to="/dashboard/overview">
           <ListItem button >
          <ListItemText primary={"Your Work"} />
           </ListItem>
           </Link>

           <Link className="linkClass"  to="/dashboard/repositories">
           <ListItem button >
          <ListItemText primary={"Repositories"} />
           </ListItem>
           </Link>

           <Link   to="/dashboard/projects">
           <ListItem button >
          <ListItemText className="linkClass" primary={"Projects"} />
           </ListItem>
           </Link>

           <Link className="linkClass"  to="/dashboard/profile">
           <ListItem button >
          <ListItemText primary={"Profile"} />
           </ListItem>
           </Link>


           <Link className="linkClass"  to="/:username/:repo">
           <ListItem button >
          <ListItemText primary={"Projects"} />
           </ListItem>
           </Link>
    </List>
      <Divider />
       
    </div>
  );

  return (
    <div>
    <div >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>

      </div>
  )}
