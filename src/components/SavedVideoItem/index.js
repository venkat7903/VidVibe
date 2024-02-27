import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

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
        const date = formatDistanceToNow(new Date(publishedAt)).split(' ')
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <SavedVideoContainer isDark={isDark}>
              <img
                style={{width: '50%', maxWidth: '350px'}}
                src={thumbnailUrl}
                alt="thumbnail"
              />
              <div style={{marginLeft: '10px'}}>
                <h3 style={{marginTop: '0', marginBottom: '5px'}}>{title}</h3>
                <p style={{margin: 0}}>{channel.name}</p>
                <InfoList>
                  <InfoItem isDark={isDark}>
                    <p style={{margin: 0}}>{`${viewCount} views`}</p>
                  </InfoItem>
                  <InfoItem isDark={isDark}>
                    <p
                      style={{margin: 0, marginLeft: '4px'}}
                    >{`• ${date[1]} ${date[2]} ago`}</p>
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
