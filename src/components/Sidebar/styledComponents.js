import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 30%;
  max-width: 250px;
  height: 100vh;
  background: ${props => (props.isDark ? '#000' : '#fff')};
  color: ${props => (props.isDark ? '#fff' : '#000')};
  margin-top: 0px;
  padding: 1px;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    display: none;
  }
`

export const LogosList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
`

export const LogoImg = styled.img`
  width: 40px;
  margin-right: 10px;
`

export const ContactUsContainer = styled.div`
  padding: 0px 20px;
`

export const ContactUs = styled.p`
  color: ${props => (props.isDark ? '#fff' : '#000')};
  font-weight: 600;
`

export const ContactDesc = styled.p`
  color: ${props => (props.isDark ? '#fff' : '#000')};
  font-weight: 500;
`

// export const SidebarContainer = styled.div``
