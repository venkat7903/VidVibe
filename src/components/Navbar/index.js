/* eslint-disable jsx-a11y/control-has-associated-label */
import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {RiSunLine} from 'react-icons/ri'
import {IoMdMenu, IoMdClose} from 'react-icons/io'
import {IoLogOutOutline} from 'react-icons/io5'
import Popup from 'reactjs-popup'

import ThemeContext from '../../Context/ThemeContext'
import MenuListItems from '../MenuItemsList'

import {
  WebImage,
  Nav,
  IconBtn,
  SubNav,
  IconsContainer,
  PopupContainer,
  CrossBtn,
} from './styledComponents'

const Navbar = props => {
  const {history} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value

        const renderMenuPopup = () => (
          <Popup
            modal
            open
            trigger={
              <IconBtn type="button">
                <IoMdMenu size={40} color={isDark ? '#fff' : '#000'} />
              </IconBtn>
            }
          >
            {close => (
              <PopupContainer isDark={isDark}>
                <CrossBtn type="button" onClick={() => close()}>
                  <IoMdClose size={40} color={isDark ? '#fff' : '#000'} />
                </CrossBtn>
                <MenuListItems />
              </PopupContainer>
            )}
          </Popup>
        )

        return (
          <Nav isDark={isDark}>
            <SubNav>
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
              <IconsContainer>
                <IconBtn
                  type="button"
                  data-testid="theme"
                  onClick={() => changeTheme()}
                >
                  {isDark ? (
                    <RiSunLine size={30} color="#fff" />
                  ) : (
                    <FaMoon size={30} color="#000" />
                  )}
                </IconBtn>
                {renderMenuPopup()}
                <IconBtn type="button">
                  <IoLogOutOutline size={40} color={isDark ? '#fff' : '#000'} />
                </IconBtn>
              </IconsContainer>
            </SubNav>
          </Nav>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Navbar)
