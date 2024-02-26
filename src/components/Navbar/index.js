/* eslint-disable jsx-a11y/control-has-associated-label */
import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'

import ThemeContext from '../../Context/ThemeContext'

import {WebImage, Nav} from './styledComponents'

const Navbar = props => {
  const {history} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Nav isDark={isDark}>
            <div>
              <Link to="/">
                <WebImage
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <div>
                <button type="button" data-testid="theme">
                  <FaMoon />
                </button>
              </div>
            </div>
          </Nav>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Navbar)
