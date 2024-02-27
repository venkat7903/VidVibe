import styled from 'styled-components'

export const MovieListItem = styled.li`
  width: 100%;
  background: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  margin-bottom: 10px;
  @media (min-width: 576px) {
    width: 49%;
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    width: 49%;
    margin-right: 5px;
  }
  @media (min-width: 992px) {
    width: 32%;
    margin-right: 7px;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
`

export const VideoInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${props => (props.isDark ? '#fff' : '#000')};
  padding: 10px 0px;
  flex-grow: 1;
`

export const SubVideoInfoContainer = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: 576px) {
    margin-left: 0px;
  }
`

export const TitleInfoListContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const InfoList = styled.ul`
  list-style-type: disc;
  color: ${props => (props.isDark ? '#94a3b8' : ' #231f20')};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 576px) {
    align-items: flex-start;
    list-style-type: none;
    padding-left: 0;
    margin-top: 0px;
  }
`
export const SpecItem = styled.li`
  margin-left: 25px;
  @media (min-width: 576px) {
    list-style-type: disc;
  }
`

// ${props => props.isDark ? '' : ''}
// export const nam = styled.na``
