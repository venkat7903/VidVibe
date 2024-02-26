import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import ThemeContext from './Context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <ThemeContext.Provider value={{isDark, changeTheme: this.changeTheme}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={null} />
          <ProtectedRoute exact path="/gaming" component={null} />
          <ProtectedRoute exact path="/saved-videos" component={null} />
          <ProtectedRoute exact path="/videos/:id" component={null} />
          <ProtectedRoute exact path="/not-found" component={null} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
