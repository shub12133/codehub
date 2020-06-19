import React, { useState, useCallback, useRef, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import FormDialog from "../../shared/components/FormDialog";
import HighlightedInformation from "../../shared/components/HighlightedInformation";
import ButtonCircularProgress from "../../shared/components/ButtonCircularProgress";
import VisibilityPasswordTextField from "../../shared/components/VisibilityPasswordTextField";

const styles = (theme) => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
  disabledText: {
    cursor: "auto",
    color: theme.palette.text.disabled,
  },
  formControlLabel: {
    marginRight: 0,
  },
});

function Login(props) {
  const history = useHistory()
    const {login,isAuthenticated,user} = props
  const classes = useStyles();
  const [formData , setFormData] = useState({
      email : "",
      password : ""
  })
 const handleChange = e =>{
      setFormData({
          ...formData,
          [e.target.name] : e.target.value
      })
  }
const  handleSubmit = e =>{
      e.preventDefault()
      login(formData,history)
      .then(()=>{
        getUser(user)
      })
  }
  // if(isAuthenticated){
  //     return <Redirect to='/' />
  // }
 const handleGithub = ()=>{
   window.location.href = `${host}${githubAuth}`
 }
 const handlePush =()=>{
  history.push('/register')
 }
  return (
    <Container component="main" maxWidth="xs" className={classes.bkg}>
      <CssBaseline />
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
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link onClick={handlePush} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string,
};

export default withRouter(withStyles(styles)(LoginDialog));
