import React , {useEffect} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Sidebar from './components/sideBar'
import Footer from './components/Footer/Footer'
import './App.css';
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import {loadUser} from './actions/authAction'
import {connect} from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import OverView from './components/OverView/overView'
import Oauth from './containers/Auth/Oauth'
import SideBar from './components/sideBar'
import CreateRepo from './components/repo/createRepo'
import ImportRepo from './components/repo/importRepo'
import Workspace from './components/workspace/workspace'
import Repository from './components/repo/repository'
import Project from './components/repo/project'
import User from './components/user/repo'
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
        <div style={{display:'flex'}} >
              <div>
                  <SideBar/>
              </div>
              <div>
                <Route exact path='/' component={Home}/>
                <Route exact path='/dashboard' />
                <Route exact path='/overview' component={OverView}/>
                <Route exact path='/repo/create' component={CreateRepo}/>
                <Route exact path='/repo/import' component={ImportRepo}/>
                <Route exact path='/workspace/create' component={Workspace}/>
                <Route exact path='/repositories' component={ Repository}/>
                <Route exact path='/projects' component={ Project}/>
                <Route exact path='/:username/:repo' component={ User}/>

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
