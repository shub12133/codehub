import React , {useEffect} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Sidebar from './components/dashBoard'
import Footer from './components/Footer/Footer'
import './App.css';
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import {loadUser} from './actions/authAction'
import {connect} from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import OverView from './components/OverView/overView'
import Oauth from './containers/Auth/Oauth'
import DashBoard from './components/dashBoard'
import CreateRepo from './components/repo/createRepo'
import ImportRepo from './components/repo/importRepo'
import Workspace from './components/workspace/workspace'
import Repository from './components/repo/repository'
import Project from './components/repo/project'
import Explore from './components/explore'
import Profile from './components/Profile/Profile'
import User from './components/user/repo'
import Api from './components/repos/gitbreaker'
import Projects from './components/repo/project'
import CreateProject from './components/createProject'
const Home = ()=>{
  return (
    <h1>Home</h1>
  )
}
function App({loadUser}) {
  useEffect(() => {
    loadUser()
   
  }, [])
  return (
      <Router>
      <header>
          <Navbar/>
        </header>
        <div style={{display:'flex',height:"100vh"}} >
        
              <div style={{backgroundColor:"rgb(7, 71, 166)"}}>
                  <DashBoard/>
              </div>
              <div  style={{textAlign:"center",alignItems:"center",width:"100%"}} >
                <Route exact path='/' component={Home}/>
                <Route exact path='/dashboard' component={DashBoard} />
                <Route exact path='/dashboard/overview' component={OverView}/>
                <Route exact path='/dashboard/overview' component={OverView}/>
                <Route exact path='/dashboard/explore' component={Explore}/>

                <Route exact path='/repo/create' component={CreateRepo}/>
                <Route exact path='/repo/import' component={ImportRepo}/>
                <Route exact path='/workspace/create' component={Workspace}/>
                <Route exact path='/dashboard/repositories' component={ Repository}/>
                <Route exact path='/dashboard/projects' component={ Projects}/>
                <Route exact path='/dashboard/profile' component={Profile}/>
                <Route exact path='/account/projects/create' component={CreateProject}/>

                <Route exact path='/user/:username/:repo' component={ User}/>
 
                <Route  path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route path="/oauth/:token/success/:success" component={Oauth}/>
               </div>
               <Footer/>
        </div>
      </Router>
  );
}

export default connect(null,  {loadUser})(App);
