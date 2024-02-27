import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {IoMdSave} from 'react-icons/io'

import Navbar from '../Navbar'
import FailureView from '../FailureView'
import Sidebar from '../Sidebar'

import ThemeContext from '../../Context/ThemeContext'
import SavedContext from '../../Context/SavedVideos'

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

  onClickRetry = () => {
    this.getVideoDetails()
  }

  render() {
    return (
      <div>
        <Navbar />
        <div style={{display: 'flex'}}>
          <Sidebar />
          <ThemeContext.Consumer>
            {value => (
              <SavedContext.Consumer>
                {saveValue => {
                  const {savedVideos, toggleSaved} = saveValue
                  const {isDark} = value
                  const {isLiked, isDisliked} = this.state

                  const savedIdList = savedVideos.map(each => each.id)

                  const renderVideoDetails = () => {
                    const {videoData} = this.state
                    const {
                      id,
                      title,
                      videoUrl,
                      channel,
                      viewCount,
                      publishedAt,
                      description,
                    } = videoData
                    const {name, profileImgUrl, subscriberCount} = channel

                    const isSaved = savedIdList.includes(id)

                    const date = formatDistanceToNow(
                      new Date(publishedAt),
                    ).split(' ')

                    return (
                      <VideoDetails isDark={isDark}>
                        <ReactPlayer url={videoUrl} width="100%" controls />
                        <SubVideoDetails>
                          <p style={{fontSize: '18px'}}>{title}</p>
                          <InfoContainer>
                            <InfoList>
                              <InfoItem isDark={isDark}>
                                <p
                                  style={{margin: 0}}
                                >{`${viewCount} views`}</p>
                              </InfoItem>
                              <InfoItem isDark={isDark}>
                                <p
                                  style={{margin: 0, marginLeft: '15px'}}
                                >{`• ${date[1]} ${date[2]} ago`}</p>
                              </InfoItem>
                            </InfoList>
                            <div
                              style={{display: 'flex', alignItems: 'center'}}
                            >
                              <FeatBtn
                                isDark={isDark}
                                type="button"
                                onClick={this.onLike}
                                isLiked={isLiked}
                              >
                                <AiOutlineLike size={16} />
                                <span
                                  style={{fontSize: '16px', marginLeft: '5px'}}
                                >
                                  Like
                                </span>
                              </FeatBtn>
                              <FeatBtn
                                isDark={isDark}
                                type="button"
                                onClick={this.onDisliked}
                                isLiked={isDisliked}
                              >
                                <AiOutlineDislike size={16} />
                                <span
                                  style={{fontSize: '16px', marginLeft: '5px'}}
                                >
                                  Dislike
                                </span>
                              </FeatBtn>
                              <FeatBtn
                                isDark={isDark}
                                type="button"
                                onClick={() => toggleSaved(videoData)}
                                isLiked={isSaved}
                              >
                                <IoMdSave size={16} />
                                <span
                                  style={{fontSize: '16px', marginLeft: '5px'}}
                                >
                                  {isSaved ? 'Saved' : 'Save'}
                                </span>
                              </FeatBtn>
                            </div>
                          </InfoContainer>
                          <HRLine />
                          <div
                            style={{display: 'flex', flexDirection: 'column'}}
                          >
                            <div
                              style={{display: 'flex', alignItems: 'center'}}
                            >
                              <img
                                style={{width: '50px'}}
                                src={profileImgUrl}
                                alt={name}
                              />
                              <div style={{marginLeft: '15px'}}>
                                <p style={{marginBottom: '10px'}}>{name}</p>
                                <p
                                  style={{marginTop: '0px'}}
                                >{`${subscriberCount} subscribers`}</p>
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

                  const renderFailure = () => (
                    <FailureView onClickRetry={this.onClickRetry} />
                  )

                  const renderViews = () => {
                    const {apiStatus} = this.state
                    switch (apiStatus) {
                      case apiStatusConstants.success:
                        return renderVideoDetails()
                      case apiStatusConstants.failure:
                        return renderFailure()
                      case apiStatusConstants.inProgress:
                        return renderLoader()
                      default:
                        return null
                    }
                  }

                  return (
                    <VideoItemDetailsContainer
                      data-testid="videoItemDetails"
                      isDark={isDark}
                    >
                      {renderViews()}
                    </VideoItemDetailsContainer>
                  )
                }}
              </SavedContext.Consumer>
            )}
          </ThemeContext.Consumer>
        </div>
      </div>
    )
  }
}

export default VideoItemDetails
