import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'

import './App.css'

// Replace your code here
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={null} />
        <ProtectedRoute exact path="/trending" component={null} />
        <ProtectedRoute exact path="/gaming" component={null} />
        <ProtectedRoute exact path="/saved-videos" component={null} />
      </Switch>
    )
  }
}

export default App
