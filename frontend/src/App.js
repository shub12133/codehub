import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Sidebar from './components/sideBar'
import Footer from './components/Footer/Footer'
import './App.css';
import store from './store'
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'

function App() {
  return (
    <Provider store = {store}>
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
    </Provider>
  );
}

export default App;
