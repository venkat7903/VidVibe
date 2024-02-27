import MenuListItems from '../MenuItemsList'
import ThemeContext from '../../Context/ThemeContext'

import {
  SidebarContainer,
  LogosList,
  LogoImg,
  ContactUsContainer,
  ContactUs,
  ContactDesc,
} from './styledComponents'

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <SidebarContainer isDark={isDark}>
          <div style={{flexGrow: 1}}>
            <MenuListItems />
          </div>
          <ContactUsContainer>
            <ContactUs isDark={isDark}>CONTACT US</ContactUs>
            <LogosList>
              <li>
                <LogoImg
                  alt="facebook logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                />
              </li>
              <li>
                <LogoImg
                  alt="twitter logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                />
              </li>
              <li>
                <LogoImg
                  alt="linked in logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                />
              </li>
            </LogosList>
            <ContactDesc isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDesc>
          </ContactUsContainer>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Sidebar
