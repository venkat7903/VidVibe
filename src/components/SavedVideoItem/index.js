import {Link} from 'react-router-dom'
// import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../Context/ThemeContext'

import {SavedVideoContainer, InfoItem, InfoList} from './styledComponents'

const SavedVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    channel,
  } = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <SavedVideoContainer isDark={isDark}>
              <img
                style={{width: '50%', maxWidth: '350px', height: '180px'}}
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <div style={{marginLeft: '20px'}}>
                <p style={{marginTop: '0', marginBottom: '5px'}}>{title}</p>
                <p style={{margin: 0}}>{channel.name}</p>
                <InfoList>
                  <InfoItem isDark={isDark}>
                    <p style={{margin: 0}}>{`${viewCount} views`}</p>
                  </InfoItem>
                  <InfoItem isDark={isDark}>
                    {/* <p
                      style={{margin: 0, marginLeft: '4px'}}
                    >{`• ${date[1]} ${date[2]} ago`}</p> */}
                    <p style={{margin: 0, marginLeft: '4px'}}>{publishedAt}</p>
                  </InfoItem>
                </InfoList>
              </div>
            </SavedVideoContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoItem

// const date = formatDistanceToNow(new Date(publishedAt)).split(' ')
//         const dateData = formatDistanceToNow(new Date(publishedAt))
