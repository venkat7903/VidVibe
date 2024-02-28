import {Component} from 'react'
import {IoMdClose, IoIosSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'
import NoSearchResults from '../NoSearchResults'
import ThemeContext from '../../Context/ThemeContext'

import {
  HomeRouteContainer,
  BannerContainer,
  CrossBtn,
  WebImage,
  PremiumContainer,
  GetItBtn,
  SubHomeRouteContainer,
  SearchContainer,
  Input,
  SearchBtn,
  LoaderContainer,
  ViewsContainer,
  MoviesList,
  Main,
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
  channel: {
    name: data.channel.name,
    profileImageUrl: data.channel.profile_image_url,
  },
  viewCount: data.view_count,
  publishedAt: data.published_at,
})

class Home extends Component {
  state = {
    searchInput: '',
    isBannerPresent: true,
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: formattedVideoList,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onGetSearchResults = () => {
    this.getVideosList()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderBanner = () => (
    <BannerContainer data-testid="banner">
      <PremiumContainer>
        <WebImage
          alt="nxt watch logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <p style={{color: '#000'}}>
          Buy Nxt Watch Premium prepaid plans with UPI
        </p>
        <GetItBtn type="button">GET IT NOW</GetItBtn>
      </PremiumContainer>
      <CrossBtn
        type="button"
        onClick={() => this.setState({isBannerPresent: false})}
        data-testid="close"
      >
        <IoMdClose size={30} />
      </CrossBtn>
    </BannerContainer>
  )

  renderNoSearchResults = () => (
    <NoSearchResults onClickRetry={this.onClickRetry} />
  )

  renderVideoList = () => {
    const {videosList} = this.state

    return videosList.length > 1 ? (
      <MoviesList>
        {videosList.map(each => (
          <VideoItem key={each.id} videoDetails={each} />
        ))}
      </MoviesList>
    ) : (
      this.renderNoSearchResults()
    )
  }

  onClickRetry = () => {
    this.getVideosList()
  }

  renderFailure = () => <FailureView onClickRetry={this.onClickRetry} />

  render() {
    const {isBannerPresent, searchInput} = this.state
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

          const renderViews = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiStatusConstants.success:
                return this.renderVideoList()
              case apiStatusConstants.failure:
                return this.renderFailure()
              case apiStatusConstants.inProgress:
                return renderLoader()
              default:
                return null
            }
          }

          return (
            <Main isDark={isDark} data-testid="home">
              <Navbar />
              <div style={{display: 'flex'}}>
                <Sidebar />
                <HomeRouteContainer isDark={isDark}>
                  {isBannerPresent && this.renderBanner()}
                  <SubHomeRouteContainer isDark={isDark}>
                    <SearchContainer isDark={isDark}>
                      <Input
                        isDark={isDark}
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchBtn
                        type="button"
                        isDark={isDark}
                        onClick={this.onGetSearchResults}
                        data-testid="searchButton"
                      >
                        <IoIosSearch size={20} />
                      </SearchBtn>
                    </SearchContainer>
                    <ViewsContainer>{renderViews()}</ViewsContainer>
                  </SubHomeRouteContainer>
                </HomeRouteContainer>
              </div>
            </Main>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
