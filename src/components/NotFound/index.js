import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import ThemeContext from '../../Context/ThemeContext'

import {NotFoundRoute, Img} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <div data-testid="trending">
          <Navbar />
          <div style={{display: 'flex'}}>
            <Sidebar />
            <NotFoundRoute isDark={isDark}>
              <Img
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <h1>Page Not Found</h1>
              <p>we are sorry, the page you requested could not be found.</p>
            </NotFoundRoute>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
