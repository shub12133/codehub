import React from 'react'
import {connect} from 'react-redux'
import {Alert} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    }
}))


 const AlertC =({alerts}) => {
    const classes = useStyles();
    console.log(alerts)
 return    alerts !== null && 
    alerts.length > 0 &&
    alerts.map((alert)=>  <div className={classes.root}>
    <Alert severity="error">{alert.msg}</Alert>
    </div>
    )
    
 }

const mapStateToProps = state=>({
    alerts : state.alert
})

export default connect(mapStateToProps)(AlertC);