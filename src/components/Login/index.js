import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../Context/ThemeContext'

import {
  LoginContainer,
  Form,
  WebImage,
  Label,
  InputContainer,
  Input,
  LoginButton,
  ShowPasswordContainer,
  CheckBox,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheck = event => {
    this.setState({showPassword: event.target.checked})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            username,
            password,
            showPassword,
            showErrorMsg,
            errorMsg,
          } = this.state
          const {isDark} = value
          return (
            <LoginContainer isDark={isDark}>
              <Form isDark={isDark} onSubmit={this.onSubmitForm}>
                <WebImage
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputContainer isDark={isDark}>
                  <Label isDark={isDark} htmlFor="username">
                    USERNAME
                  </Label>
                  <Input
                    isDark={isDark}
                    value={username}
                    type="text"
                    id="username"
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                  />
                </InputContainer>
                <InputContainer isDark={isDark}>
                  <Label isDark={isDark} htmlFor="password">
                    PASSWORD
                  </Label>
                  <Input
                    isDark={isDark}
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    onChange={this.onChangePassword}
                  />
                </InputContainer>
                <ShowPasswordContainer>
                  <CheckBox
                    checked={showPassword}
                    type="checkbox"
                    id="showPassword"
                    onChange={this.onChangeCheck}
                  />
                  <Label isDark={isDark} check htmlFor="showPassword">
                    Show Password
                  </Label>
                </ShowPasswordContainer>
                <div style={{color: '#ffffff', width: '100%'}}>
                  <LoginButton type="submit" style={{color: '#ffffff'}}>
                    Login
                  </LoginButton>
                </div>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </Form>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login

// style={{color: '#ffffff'}}
