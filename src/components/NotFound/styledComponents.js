import styled from 'styled-components'

export const NotFoundRoute = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: auto;
  color: ${props => (props.isDark ? '#fff' : '#000')};
  background: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const Img = styled.img`
  width: 60%;
  max-width: 500px;
`

// ${props => props.isDark ? '' : ''}
// export const nam = styled.na``
