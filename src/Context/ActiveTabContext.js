import React from 'react'

const ActiveMenuContext = React.createContext({
  activeMenu: 'HOME',
  changeActiveMenu: () => {},
})

export default ActiveMenuContext
