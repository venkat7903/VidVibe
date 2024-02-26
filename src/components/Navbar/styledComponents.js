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
  padding: 10px 0px;
  border: 1px solid red;

  @media (min-width: 768px) {
    padding: 20px 0px;
  }
`

export const SubNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border: 1px solid red;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;
`

export const IconBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#00000080' : '#ffffff80')};
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

// export const na = styled.na``
