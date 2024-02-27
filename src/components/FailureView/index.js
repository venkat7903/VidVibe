import ThemeContext from '../../Context/ThemeContext'

import {FailureContainer, FailHeading, Desc, RetryBtn} from './styledComponents'

const FailureView = props => {
  const {onClickRetry} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <FailureContainer>
            <img
              style={{width: '60%', maxWidth: '200px'}}
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailHeading isDark={isDark}>
              Oops! Something Went Wrong
            </FailHeading>
            <Desc isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </Desc>
            <RetryBtn onClick={() => onClickRetry()} type="button">
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
