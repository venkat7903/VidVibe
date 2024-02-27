import styled from 'styled-components'

export const TrendingRoute = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.isDark ? '#fff' : '#000')};
`

export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MoviesList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
  @media (min-width: 576px) {
    justify-content: flex-start;
  }
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  padding: 10px 15px;
  @media (min-width: 576px) {
    padding: 10px 25px;
  }
`

export const Banner = styled.div`
  background: ${props => (props.isDark ? '#212121' : '#ebebeb')};
  display: flex;
  align-items: center;
  padding: 10px 15px;
`

export const LogoContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000' : '#d7dfe9')};
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
// ${props => props.isDark ? '' : ''}
// export const nam = styled.na``
