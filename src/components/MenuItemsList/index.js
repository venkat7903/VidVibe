import {Link} from 'react-router-dom'

import ThemeContext from '../../Context/ThemeContext'
import ActiveMenuContext from '../../Context/ActiveTabContext'

import {MenuList, MenuItem, MenuLink} from './styledComponents'

const menuList = [
  {
    id: 'HOME',
    text: 'Home',
    path: '/',
  },
  {
    id: 'TRENDING',
    text: 'Trending',
    path: '/trending',
  },
  {
    id: 'GAMING',
    text: 'Gaming',
    path: '/gaming',
  },
  {
    id: 'SAVED',
    text: 'Saved Videos',
    path: '/saved-videos',
  },
]

const MenuListItems = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <ActiveMenuContext.Consumer>
          {activeValue => {
            const {activeMenu} = activeValue
            return (
              <MenuList>
                {menuList.map(each => (
                  <MenuItem
                    isDark={isDark}
                    isActive={each.id === activeMenu}
                    key={each.id}
                  >
                    <Link to={each.path} style={{textDecoration: 'none'}}>
                      <MenuLink>{each.text}</MenuLink>
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            )
          }}
        </ActiveMenuContext.Consumer>
      )
    }}
  </ThemeContext.Consumer>
)

export default MenuListItems
