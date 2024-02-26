import {Link} from 'react-router-dom'
import {IoMdHome, IoMdSave} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../Context/ThemeContext'
import ActiveMenuContext from '../../Context/ActiveTabContext'

import {MenuList, MenuItem, MenuLink} from './styledComponents'

const menuList = [
  {
    id: 'HOME',
    text: 'Home',
    path: '/',
    icon: IoMdHome,
  },
  {
    id: 'TRENDING',
    text: 'Trending',
    path: '/trending',
    icon: FaFire,
  },
  {
    id: 'GAMING',
    text: 'Gaming',
    path: '/gaming',
    icon: SiYoutubegaming,
  },
  {
    id: 'SAVED',
    text: 'Saved Videos',
    path: '/saved-videos',
    icon: IoMdSave,
  },
]

const MenuListItems = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <ActiveMenuContext.Consumer>
          {activeValue => {
            const {activeMenu, changeActiveMenu} = activeValue
            return (
              <MenuList>
                {menuList.map(each => {
                  const isActive = each.id === activeMenu
                  return (
                    <Link
                      to={each.path}
                      key={each.id}
                      style={{textDecoration: 'none'}}
                      onClick={() => changeActiveMenu(each.id)}
                    >
                      <MenuItem isDark={isDark} isActive={isActive}>
                        <each.icon
                          size={30}
                          color={isActive ? '#ff0000' : undefined}
                        />
                        <MenuLink isDark={isDark}>{each.text}</MenuLink>
                      </MenuItem>
                    </Link>
                  )
                })}
              </MenuList>
            )
          }}
        </ActiveMenuContext.Consumer>
      )
    }}
  </ThemeContext.Consumer>
)

export default MenuListItems
