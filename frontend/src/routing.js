import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import OverView from './components/OverView/overView'
import CreateRepo from './components/repo/createRepo'
import ImportRepo from './components/repo/importRepo'
import Workspace from './components/workspace/workspace'
import Repository from './components/repo/repository'
import RepoCode from './components/user/repocode'
import Explore from './components/explore'
import Profile from './components/Profile/Profile'
import UserRepo from './components/user/repo'
import CreateProject from './components/createProject'
function Routing(){
    return(
        <>

                <Route exact path='/dashboard/overview' component={OverView}/>
                 <Route exact path='/dashboard/explore' component={Explore}/>
                <Route exact path='/repo/create' component={CreateRepo}/>
                <Route exact path='/repo/import' component={ImportRepo}/>
                <Route exact path='/workspace/create' component={Workspace}/>
                <Route exact path='/dashboard/repositories' component={ Repository}/>
                {/* <Route exact path='/dashboard/projects' component={ Projects}/> */}
                <Route exact path='/dashboard/profile' component={Profile}/>
                <Route exact path='/account/projects/create' component={CreateProject}/>

                <Route exact path='/user/:username/:repo' component={ UserRepo}/>
                <Route exact path='/user/:username/:repo/:filename' component={ RepoCode}/>
        </>

    )
}

export default Routing