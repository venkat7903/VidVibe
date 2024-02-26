import React from 'react'

const ActiveMenuContext = React.createContext({
  activeMenu: '',
  changeActiveMenu: () => {},
})

export default ActiveMenuContext
