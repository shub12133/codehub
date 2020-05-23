import React , {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux'
import {login} from '../../actions/authAction'
import {Redirect} from 'react-router-dom'
import AlertC from '../../components/Alert/Alert'
import GitHubIcon from '@material-ui/icons/GitHub';
import {host,githubAuth} from '../../utils/constants'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  bkg : {
      backgroundColor : "#f5f5f5"
  }
}));

function Login(props) {
    const {login,isAuthenticated,errorMessage} = props
  const classes = useStyles();
  const [formData , setFormData] = useState({
      email : "mohammedafzal94@gmail.com",
      password : "abc123"
  })
 const handleChange = e =>{
      setFormData({
          ...formData,
          [e.target.name] : e.target.value
      })
  }
const  handleSubmit = e =>{
      e.preventDefault()
      login(formData)
  }
  // if(isAuthenticated){
  //     return <Redirect to='/' />
  // }
 const handleGithub = ()=>{
   window.location.href = `${host}${githubAuth}`
 }
  return (
    <Container component="main" maxWidth="xs" className={classes.bkg}>
       <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <GitHubIcon onClick={handleGithub}/>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <AlertC/>
       
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={formData.email}
            autoComplete="email"
            autoFocus
            onChange = {handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            id="password"
            autoComplete="current-password"
            onChange = {handleChange}

          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <GitHubLogin/>

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/register" variant="body2">
                donr have an account? Sign in
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}
const mapStateToProps= state => ({
    isAuthenticated : state.authReducer.isAuthenticated,
    errorMessage:state.authReducer.error
    isAuthenticated : state.auth
})

export default  connect(mapStateToProps, {login})(Login)
