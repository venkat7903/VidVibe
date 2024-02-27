import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {IoMdSave} from 'react-icons/io'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import ThemeContext from '../../Context/ThemeContext'

import {
  VideoItemDetailsContainer,
  LoaderContainer,
  VideoDetails,
  SubVideoDetails,
  InfoItem,
  InfoList,
  FeatBtn,
  HRLine,
  InfoContainer,
} from './styledComponents'
import {LogoImg} from '../Sidebar/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const getFormattedData = data => ({
  id: data.id,
  title: data.title,
  videoUrl: data.video_url,
  thumbnailUrl: data.thumbnail_url,
  channel: {
    name: data.channel.name,
    profileImgUrl: data.channel.profile_image_url,
    subscriberCount: data.channel.subscriber_count,
  },
  viewCount: data.view_count,
  publishedAt: data.published_at,
  description: data.description,
})

class VideoItemDetails extends Component {
  state = {
    videoData: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const formattedData = getFormattedData(data.video_details)
      console.log(formattedData)
      this.setState({
        videoData: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onDisliked = () => {
    this.setState(prevState => ({
      isLiked: false,
      isDisliked: !prevState.isDisliked,
    }))
  }

  render() {
    return (
      <div data-testid="videoItemDetails">
        <Navbar />
        <div style={{display: 'flex'}}>
          <Sidebar />
          <ThemeContext.Consumer>
            {value => {
              const {isDark} = value
              const {isLiked, isDisliked} = this.state
              const renderVideoDetails = () => {
                const {videoData} = this.state
                const {
                  id,
                  title,
                  videoUrl,
                  thumbnailUrl,
                  channel,
                  viewCount,
                  publishedAt,
                  description,
                } = videoData
                const {name, profileImgUrl, subscriberCount} = channel
                const date = formatDistanceToNow(new Date(publishedAt)).split(
                  ' ',
                )

                return (
                  <VideoDetails isDark={isDark}>
                    <ReactPlayer url={videoUrl} width="100%" />
                    <SubVideoDetails>
                      <p style={{fontSize: '18px'}}>{title}</p>
                      <InfoContainer>
                        <InfoList>
                          <InfoItem isDark={isDark}>
                            <p style={{margin: 0}}>{`${viewCount} views`}</p>
                          </InfoItem>
                          <InfoItem isDark={isDark}>
                            <p
                              style={{margin: 0, marginLeft: '15px'}}
                            >{`• ${date[1]} ${date[2]} ago`}</p>
                          </InfoItem>
                        </InfoList>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                          <FeatBtn
                            isDark={isDark}
                            type="button"
                            onClick={this.onLike}
                            isLiked={isLiked}
                          >
                            <AiOutlineLike size={16} />
                            <span style={{fontSize: '16px', marginLeft: '5px'}}>
                              Like
                            </span>
                          </FeatBtn>
                          <FeatBtn
                            isDark={isDark}
                            type="button"
                            onClick={this.onDisliked}
                            isLiked={isDisliked}
                          >
                            <AiOutlineLike size={16} />
                            <span style={{fontSize: '16px', marginLeft: '5px'}}>
                              Dislike
                            </span>
                          </FeatBtn>
                          <FeatBtn
                            isDark={isDark}
                            type="button"
                            onClick={this.onDisliked}
                            isLiked={isDisliked}
                          >
                            <IoMdSave size={16} />
                            <span style={{fontSize: '16px', marginLeft: '5px'}}>
                              Save
                            </span>
                          </FeatBtn>
                        </div>
                      </InfoContainer>
                      <HRLine />
                      <div>
                        <div>
                          <img
                            style={{width: '40px'}}
                            src={profileImgUrl}
                            alt={name}
                          />
                          <div>
                            <p>{name}</p>
                            <p>{`${subscriberCount} subscribers`}</p>
                          </div>
                        </div>
                        <p>{description}</p>
                      </div>
                    </SubVideoDetails>
                  </VideoDetails>
                )
              }

              const renderLoader = () => (
                <LoaderContainer
                  className="loader-container"
                  data-testid="loader"
                >
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
                    return renderVideoDetails()
                  case apiStatusConstants.failure:
                    return null
                  case apiStatusConstants.inProgress:
                    return renderLoader()
                  default:
                    return null
                }
              }

              return (
                <VideoItemDetailsContainer isDark={isDark}>
                  {renderViews()}
                </VideoItemDetailsContainer>
              )
            }}
          </ThemeContext.Consumer>
        </div>
      </div>
    )
  }
}

export default VideoItemDetails
