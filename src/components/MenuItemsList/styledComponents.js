import styled from 'styled-components'

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  list-style-type: none;
  text-decoration: none;
  padding-left: 0;
`

export const MenuItem = styled.li`
  color: ${props => (props.isDark ? '#fff' : '#000')};
  background: transparent;
  background: ${props =>
    props.isActive === true && props.isDark === true && '#212121'};
  background: ${props =>
    props.isActive === true && props.isDark === false && '#cbd5e1'};
  display: flex;
  align-items: center;
  padding: 0px 20px;
`

export const MenuLink = styled.p`
  text-decoration: none;
  color: ${props => (props.isDark ? '#fff' : '#000')};
  font-size: 18px;
  margin-left: 20px;
`

// export const MenuList = styled.ul``
