import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.isDark ? '#fff' : '#000')};
  @media (min-width: 768px) {
    padding: 20px;
  }
`

export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const VideoDetails = styled.div``

export const SubVideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
`

export const InfoContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const InfoItem = styled.li`
  color: ${props => (props.isDark ? '#94a3b8' : '#64748b')};
`

export const InfoList = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0;
`

export const FeatBtn = styled.button`
  background: transparent;
  border: none;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  font-weight: 520;
  display: flex;
  align-items: center;
  padding: 0;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
`

export const HRLine = styled.hr`
  width: 100%;
  margin: 25px 0px;
`

// ${props => props.isDark ? '' : ''}
// export const nam = styled.na``
