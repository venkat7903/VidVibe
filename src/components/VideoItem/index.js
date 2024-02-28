// import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import ThemeContext from '../../Context/ThemeContext'

import {
  MovieListItem,
  VideoThumbnail,
  VideoInfoContainer,
  SubVideoInfoContainer,
  TitleInfoListContainer,
  InfoList,
  SpecItem,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    title,
    thumbnailUrl,
    publishedAt,
    viewCount,
    channel,
    id,
  } = videoDetails
  const {name, profileImageUrl} = channel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <MovieListItem isDark={isDark}>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoInfoContainer isDark={isDark}>
                <img
                  style={{width: '40px', height: '40px', margin: 8}}
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <SubVideoInfoContainer>
                  <p
                    style={{
                      margin: 0,
                      marginTop: 0,
                      marginBottom: '5px',
                      flexGrow: 1,
                      fontSize: '15px',
                      flexWrap: 'wrap',
                    }}
                  >
                    {title}
                  </p>
                  <TitleInfoListContainer>
                    <p
                      style={{
                        color: `${isDark ? '#94a3b8' : ' #231f20'}`,
                        margin: '0',
                        marginTop: 0,
                        fontSize: '13px',
                      }}
                    >
                      {name}
                    </p>
                    <InfoList isDark={isDark}>
                      <li>
                        <p style={{fontSize: '15px'}}>{`${viewCount} views`}</p>
                      </li>
                      <SpecItem>
                        <p style={{fontSize: '15px'}}>
                          {/* {`${date[1]} ${date[2]}  ago`} */}
                          {publishedAt}
                        </p>
                      </SpecItem>
                    </InfoList>
                  </TitleInfoListContainer>
                </SubVideoInfoContainer>
              </VideoInfoContainer>
            </Link>
          </MovieListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem

// const date = formatDistanceToNow(new Date(publishedAt)).split(' ')
//   const data = formatDistanceToNow(new Date(publishedAt))
