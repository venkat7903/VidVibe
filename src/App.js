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
  state = {
    isDark: false,
    activeMenu: 'HOME',
    savedVideos: [],
    likedVideos: [],
    dislikedVideos: [],
  }

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

  toggleLiked = id => {
    const {likedVideos, dislikedVideos} = this.state

    if (dislikedVideos.includes(id)) {
      const filteredList = dislikedVideos.filter(each => each !== id)
      this.setState({dislikedVideos: filteredList})
    }

    if (likedVideos.includes(id)) {
      const filteredList = likedVideos.filter(each => each !== id)
      this.setState({likedVideos: filteredList})
    } else {
      this.setState(prevState => ({
        likedVideos: [...prevState.likedVideos, id],
      }))
    }
  }

  toggleDisliked = id => {
    const {likedVideos, dislikedVideos} = this.state

    if (likedVideos.includes(id)) {
      const filteredList = dislikedVideos.filter(each => each !== id)
      this.setState({likedVideos: filteredList})
    }

    if (dislikedVideos.includes(id)) {
      const filteredList = likedVideos.filter(each => each !== id)
      this.setState({dislikedVideos: filteredList})
    } else {
      this.setState(prevState => ({
        dislikedVideos: [...prevState.dislikedVideos, id],
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
    const {
      isDark,
      activeMenu,
      savedVideos,
      likedVideos,
      dislikedVideos,
    } = this.state
    return (
      <ThemeContext.Provider value={{isDark, changeTheme: this.changeTheme}}>
        <ActiveMenuContext.Provider
          value={{activeMenu, changeActiveMenu: this.changeActiveMenu}}
        >
          <SavedContext.Provider
            value={{
              likedVideos,
              dislikedVideos,
              savedVideos,
              toggleSaved: this.toggleSaved,
              toggleLiked: this.toggleLiked,
              toggleDisliked: this.toggleDisliked,
            }}
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
