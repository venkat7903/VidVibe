import styled from 'styled-components'

export const HomeRouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  height: 100vh;
`
export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 160px;
  width: 100%;
  background-size: cover;
  padding: 10px 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  @media (min-width: 768px) {
    height: 200px;
  }
`

export const IconBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const CrossBtn = styled(IconBtn)``

export const GetItBtn = styled.button`
  border: 2px solid #000;
  color: #000;
  width: 100px;
  height: 40px;
  font-weight: 550;
  background: transparent;
  outline: none;
  cursor: pointer;
`

export const WebImage = styled.img`
  width: 140px;
  margin: 0,
  margin-bottom: 20px;
//   @media (min-width: 768px) {
//     width: 200px;
//   }
`

export const PremiumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const SubHomeRouteContainer = styled.div`
  padding: 30px 0px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  @media (min-width: 576px) {
    padding: 30px 20px;
  }
`

export const SearchContainer = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
  height: 35px;
  flex-shrink: 0;
  border: ${props =>
    props.isDark ? '1px solid #7e858e' : '1px solid #616e7c'};
  @media (min-width: 576px) {
    width: 500px;
    margin: 0;
  }
`

export const Input = styled.input`
  flex-grow: 1;
  outline: none;
  border: none;
  background: transparent;
  padding-left: 14px;
  color: ${props => (props.isDark ? '#fff' : '#000')};
`

export const SearchBtn = styled.button`
  width: 80px;
  background-color: ${props => (props.isDark ? '#231f20' : 'transparent')};
  color: ${props => (props.isDark ? '#ebebeb' : '#616e7c')};
  border: none;
  border-left: ${props =>
    props.isDark ? '1px solid #7e858e' : '1px solid #212121'};
  outline: none;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ViewsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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

// ${props => props.isDark ? '' : ''}
// export const nam = styled.na``
