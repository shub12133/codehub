<<<<<<< HEAD
import React , {Fragment, Suspense, lazy,useEffect} from 'react';
=======
import React , {useEffect, Fragment, Suspense, lazy} from 'react';
>>>>>>> e6138897b8707a50047ac4f53cde2857402f8a53
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Sidebar from './components/dashboard/dashBoard';
import Footer from './components/Footer/Footer'
import './App.css';
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import {loadUser} from './actions/authAction'
import {connect} from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import OverView from './components/OverView/overView'
import Oauth from './containers/Auth/Oauth'
<<<<<<< HEAD
import DashBoard from './components/dashboard/dashBoard'
=======
// import DashBoard from './components/dashBoard'
>>>>>>> e6138897b8707a50047ac4f53cde2857402f8a53
import CreateRepo from './components/repo/createRepo'
import ImportRepo from './components/repo/importRepo'
import Workspace from './components/workspace/workspace'
import Repository from './components/repo/repository'
import RepoCode from './components/user/repocode'
// import Project from './components/repo/project'
import Explore from './components/explore'
import Profile from './components/Profile/Profile'
import UserRepo from './components/user/repo'
import Api from './components/repos/gitbreaker'
import Projects from './components/repo/project'
import CreateProject from './components/createProject'
<<<<<<< HEAD
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import * as serviceWorker from "./serviceWorker";
import Pace from "./shared/components/Pace";
 import home from "./components/home/Home";
 import header from "./components/home/HeadSection";



const main =lazy(() => import("./containers/Auth/Main"));
  

const Home = ()=>{
  return (
    <h1>Home</h1>
=======
// theme css
import { MuiThemeProvider, CssBaseline, Switch } from "@material-ui/core";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Routing from './routing'
// Dashboard
// import Dashboard from './components/Dashboard/Dashboard'
const DashBoard = lazy(() => import("./components/dashBoard"));
const Landing = ({auth})=>{
  return(
    <div>
        <h3>Welcome  </h3>
    </div>
>>>>>>> e6138897b8707a50047ac4f53cde2857402f8a53
  )
}
function App({loadUser, auth}) {
  useEffect(() => {
    loadUser()
   
  }, [])
  return (
      <Router>
       <MuiThemeProvider theme={theme}>
       
      
      <header>
          <Navbar/>
        </header>
      {!auth.isAuthenticated ? 
        <>
        <Route exact path='/' component={Home}/>
        <Route  path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route path="/oauth/:token/success/:success" component={Oauth}/>
        </>
        :
        <Suspense fallback={<Fragment />}>
        <div style={{display:'flex',height:"100vh"}} >

              <div style={{backgroundColor:"rgb(7, 71, 166)"}}>

                  <DashBoard/>

              </div>
              <div  style={{textAlign:"center",alignItems:"center",width:"100%"}} >
              
            
              <Route exact path='/dashboard' render={()=><Landing auth={auth}/>}  />
                <Route exact path='/dashboard/overview' component={OverView}/>
<<<<<<< HEAD
                <Route exact path='/dashboard/overview' component={OverView}/>
                <Route exact path='/dashboard/explore' component={Explore}/>
                {/* <Route exact path='/Footer/home' component={Home}/> */}
=======
                 <Route exact path='/dashboard/explore' component={Explore}/>
                 
>>>>>>> e6138897b8707a50047ac4f53cde2857402f8a53

                <Route exact path='/repo/create' component={CreateRepo}/>
                <Route exact path='/repo/import' component={ImportRepo}/>
                <Route exact path='/workspace/create' component={Workspace}/>
                <Route exact path='/dashboard/repositories' component={ Repository}/>
                {/* <Route exact path='/dashboard/projects' component={ Projects}/> */}
                <Route exact path='/dashboard/profile' component={Profile}/>
                <Route exact path='/account/projects/create' component={CreateProject}/>
                {/* <Route exact path='/home/c component={CreateProject}/> */}

                <Route exact path='/user/:username/:repo' component={ UserRepo}/>
                <Route exact path='/user/:username/:repo/:filename' component={ RepoCode}/>

              
               </div>
        </div>
          </Suspense>
        }
                       <Footer/>

        </MuiThemeProvider>
      </Router>
  );
}

const mapStateToProps = state=>({
  auth : state.auth
})

export default connect(mapStateToProps,  {loadUser})(App);
