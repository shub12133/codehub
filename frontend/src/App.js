import React , {useEffect} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Sidebar from './components/sideBar'
import Footer from './components/Footer/Footer'
import './App.css';
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import {loadUser} from './actions/authAction'
import {connect} from 'react-redux'
function App({loadUser}) {
  useEffect(() => {
    loadUser()
   
  }, [])
  return (
      <Router>
        <div className="App">
              <header>
                  <h1>Header</h1>
              </header>
              <div>
                <Route exact path='/' component={Sidebar}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>

               </div>
               <Footer/>
        </div>
      </Router>
  );
}

export default connect(null,  {loadUser})(App);
