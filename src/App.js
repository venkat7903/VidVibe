import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import ThemeContext from './Context/ThemeContext'
import ActiveMenuContext from './Context/ActiveTabContext'
import SavedContext from './Context/SavedVideos'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, activeMenu: 'HOME', savedVideos: []}

  toggleSaved = data => {
    const {savedVideos} = this.state
    const savedId = savedVideos.map(each => each.id)
    if (savedId.includes(data.id)) {
      const filteredList = savedVideos.filter(each => each.id !== data.id)

      this.setState({savedVideos: filteredList})
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, data],
      }))
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  changeActiveMenu = id => {
    this.setState({activeMenu: id})
  }

  render() {
    const {isDark, activeMenu, savedVideos} = this.state
    return (
      <ThemeContext.Provider value={{isDark, changeTheme: this.changeTheme}}>
        <ActiveMenuContext.Provider
          value={{activeMenu, changeActiveMenu: this.changeActiveMenu}}
        >
          <SavedContext.Provider
            value={{savedVideos, toggleSaved: this.toggleSaved}}
          >
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/trending" component={Trending} />
              <ProtectedRoute exact path="/gaming" component={Gaming} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideos}
              />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoItemDetails}
              />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="not-found" />
            </Switch>
          </SavedContext.Provider>
        </ActiveMenuContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
