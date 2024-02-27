import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import GameItem from '../GameItem'

import ThemeContext from '../../Context/ThemeContext'

import {
  TrendingRoute,
  LoaderContainer,
  GamesList,
  Banner,
  LogoContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const getFormatted = data => ({
  id: data.id,
  title: data.title,
  thumbnailUrl: data.thumbnail_url,
  viewCount: data.view_count,
})

class Gaming extends Component {
  state = {gamingList: []}

  componentDidMount() {
    this.getGamingList()
  }

  getGamingList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const formattedVideoList = data.videos.map(each => getFormatted(each))
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingList: formattedVideoList,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getGamingList()
  }

  renderFailure = () => <FailureView onClickRetry={this.onClickRetry} />

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const renderLoader = () => (
            <LoaderContainer className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDark ? '#fff' : '#000'}
                height="65"
                width="65"
              />
            </LoaderContainer>
          )

          const renderBanner = () => (
            <Banner isDark={isDark} data-testid="banner">
              <LogoContainer isDark={isDark}>
                <SiYoutubegaming size={30} color="#ff0000" />
              </LogoContainer>
              <h1 style={{fontSize: '24px'}}>Gaming</h1>
            </Banner>
          )

          const renderGamesList = () => {
            const {gamingList} = this.state
            console.log(gamingList)
            return (
              <div>
                {renderBanner()}
                <GamesList>
                  {gamingList.map(each => (
                    <GameItem gameDetails={each} key={each.id} />
                  ))}
                </GamesList>
              </div>
            )
          }

          const renderViews = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderGamesList()
              case apiStatusConstants.failure:
                return this.renderFailure()
              case apiStatusConstants.inProgress:
                return renderLoader()
              default:
                return null
            }
          }

          return (
            <div data-testid="gaming">
              <Navbar />
              <div style={{display: 'flex'}}>
                <Sidebar />
                <TrendingRoute isDark={isDark}>{renderViews()}</TrendingRoute>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
