import styled from 'styled-components'

export const FailureContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
`

export const FailHeading = styled.h1`
  color: ${props => (props.isDark ? ' #fff' : '#000')};
  margin: 0;
  font-size: 23px;
  margin: 7px;
  margin-bottom: 10px;
`

export const Desc = styled.p`
  color: ${props => (props.isDark ? ' #e2e8f0' : '#000')};
  margin: 0;
  font-size: 16px;
  margin-bottom: 15px;
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: #fff;
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`

export const SavedVideoRoute = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.isDark ? '#fff' : '#000')};
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

export const VideosList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  padding: 10px 15px;
  @media (min-width: 576px) {
    padding: 10px 25px;
  }
`

// ${props => props.isDark ? '' : ''}
// export const nam = styled.na``
