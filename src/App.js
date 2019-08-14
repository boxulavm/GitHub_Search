import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import User from './components/users/User'
import NotFound from './components/pages/NotFound'

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import './App.css';

const App = () => {
    return (
      <GithubState>
        <AlertState>
          <Router>
            <Navbar title='GitHub Search' />
            <Alert />
            <Switch>
              <Route exact path='/' render={props => (
                <>
                  <Search/>
                  <Users />
                </>
              )} />
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </AlertState>
      </GithubState>
    )
  }

export default App;