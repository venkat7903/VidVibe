import styled from 'styled-components'

export const SavedVideoContainer = styled.li`
  color: ${props => (props.isDark ? '#fff' : '#000')};
  display: flex;
  margin-bottom: 30px;
`

export const InfoItem = styled.li`
  color: ${props => (props.isDark ? '#94a3b8' : '#64748b')};
`

export const InfoList = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0;
`

// ${props => props.isDark ? '' : ''}
// export const nam = styled.na``
