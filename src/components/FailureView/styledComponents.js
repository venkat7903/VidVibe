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

// ${props => props.isDark ? '' : ''}
// export const nam = styled.na``
