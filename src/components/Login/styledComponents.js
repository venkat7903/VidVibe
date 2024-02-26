import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.isDark ? '#212121' : '#fff')};
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #fff;
  box-shadow: 0px 0px 4px 0px #000;
  width: 90%;
  max-width: 500px;
  padding: 40px 25px;
  border-radius: 12px;
  background: ${props => (props.isDark ? '#000' : '#fff')};
  color: ${props => (props.isDark ? '#fff' : '#000')};
`
export const WebImage = styled.img`
  width: 170px;
  align-self: center;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 200px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`

export const Label = styled.label`
  color: ${props =>
    props.isDark ? '#fff' : `${props.check ? '#000' : '#475569'}`};
  font-weight: ${props => (props.check ? '500' : '500')};
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  margin-top: 10px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  outline: none;
  background: transparent;
  color: ${props => (props.isDark ? '#fff' : '#000')};
`
export const LoginBtn = styled.button`
  background: #3b82f6;
  width: 100%;
  margin-top: 20px;
  height: 35px;
  border: none;
  color: #fff;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CheckBox = styled.input`/
 height: 10px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  margin: 0;
  font-weight: 500;
  margin-top: 10px;
`

// export const nm = styled.nm``
