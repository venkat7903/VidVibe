import styled from 'styled-components'

export const WebImage = styled.img`
  width: 170px;
  align-self: center;
  margin: 0,
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 200px;
  }
`
export const Nav = styled.nav`
  background-color: ${props => (props.isDark ? '#000' : '#fff')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  font-family: 'Roboto';

  @media (min-width: 768px) {
    padding: 25px 0px;
  }
`

export const SubNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    width: 210px;
    justify-content: space-between;
  }
`

export const IconBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  padding: 1px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 30px 0px;
`

export const CrossBtn = styled(IconBtn)`
  align-self: flex-end;
  margin-right: 20px;
`

export const BurgerBtn = styled(IconBtn)`
  @media (min-width: 768px) {
    display: none;
  }
`
export const LogoutPopupContainer = styled.div`
  background-color: #00000080;
  height: 100vh;
  width: 100vw;
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubLogoutPopupContainer = styled.div`
  color: ${props => (props.isDark ? '#fff' : '#000')};
  background-color: ${props => (props.isDark ? '#000' : '#fff')};
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`

export const PopBtn = styled.button`
  border: ${props => (props.outline ? '1px solid #616e7c' : 'none')};
  background: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  color: ${props => (props.outline ? ' #64748b' : '#fff')};
  height: 40px;
  width: 80px;
  margin: 15px 10px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`

export const MobileLogoutBtn = styled(IconBtn)`
  @media (min-width: 768px) {
    display: none;
  }
`

export const LogoutBtn = styled.button`
  border: ${props => (props.isDark ? '1px solid #fff' : '1px solid #3b82f6')};
  background: transparent;
  color: ${props => (props.isDark ? '#fff' : '#3b82f6')};
  height: 35px;
  width: 80px;
  margin: 15px 10px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  @media (max-width: 767px) {
    display: none;
  }
`

export const ProfImg = styled.img`
  width: 35px;
  @media (max-width: 767px) {
    display: none;
  }
`

// export const na = styled.na``
