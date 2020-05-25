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
import Oauth from './containers/Auth/Oauth'
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
        <div >
              <header>
                  <Navbar/>
              </header>
              <div>
                <Route exact path='/' component={Home}/>
                <Route exact path='/dashboard' component={Sidebar}/>
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
