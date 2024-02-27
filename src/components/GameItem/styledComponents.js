import styled from 'styled-components'

export const GamingContainer = styled.li`
  color: ${props => (props.isDark ? '#fff' : '#000')};
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 48%;

  @media (min-width: 768px) {
    width: 32%;
  }
  @media (min-width: 992px) {
    width: 23%;
  }
`

export const InfoItem = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#64748b')};
`

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0;
  color: ${props => (props.isDark ? '#fff' : '#000')};
`

// ${props => props.isDark ? '' : ''}
// export const nam = styled.na``
