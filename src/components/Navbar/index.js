/* eslint-disable jsx-a11y/control-has-associated-label */
import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {RiSunLine} from 'react-icons/ri'
import {IoMdMenu, IoMdClose} from 'react-icons/io'
import {IoLogOutOutline} from 'react-icons/io5'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

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
  BurgerBtn,
  LogoutBtn,
  PopBtn,
  LogoutPopupContainer,
  SubLogoutPopupContainer,
  MobileLogoutBtn,
  ProfImg,
} from './styledComponents'

const Navbar = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value

        const renderMenuPopup = () => (
          <Popup
            modal
            trigger={
              <BurgerBtn type="button">
                <IoMdMenu size={40} color={isDark === true ? '#fff' : '#000'} />
              </BurgerBtn>
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

        const renderLogoutPopup = () => (
          <Popup
            modal
            trigger={
              <div>
                <MobileLogoutBtn type="button">
                  <IoLogOutOutline size={40} color={isDark ? '#fff' : '#000'} />
                </MobileLogoutBtn>
                <LogoutBtn isDark={isDark} type="button">
                  Logout
                </LogoutBtn>
              </div>
            }
          >
            {close => (
              <LogoutPopupContainer>
                <SubLogoutPopupContainer isDark={isDark}>
                  <p>Are you sure, you want to logout?</p>
                  <div style={{display: 'flex'}}>
                    <PopBtn outline type="button" onClick={() => close()}>
                      Cancel
                    </PopBtn>
                    <PopBtn type="button" onClick={onLogout}>
                      Confirm
                    </PopBtn>
                  </div>
                </SubLogoutPopupContainer>
              </LogoutPopupContainer>
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
                <ProfImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                {renderLogoutPopup()}
              </IconsContainer>
            </SubNav>
          </Nav>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Navbar)
