import styled from 'styled-components'

export const WebImage = styled.img`
  width: 170px;
  align-self: center;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 200px;
  }
`
export const Nav = styled.nav`
  background-color: ${props => (props.isDark ? '#000' : '#fff')};
`

export const SubNav = styled.div``

export const IconsContainer = styled.div``

export const IconBtn = styled.button``

// export const na = styled.na``
