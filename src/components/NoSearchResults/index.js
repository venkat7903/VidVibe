import ThemeContext from '../../Context/ThemeContext'

import {FailureContainer, FailHeading, Desc, RetryBtn} from './styledComponents'

const NoSearchResults = props => {
  const {onClickRetry} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <FailureContainer>
            <img
              style={{width: '60%', maxWidth: '200px'}}
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt="no videos"
            />
            <FailHeading isDark={isDark}>No Search results found</FailHeading>
            <Desc isDark={isDark}>
              Try different key words or remove search filter
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

export default NoSearchResults
