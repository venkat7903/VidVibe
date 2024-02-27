import {Link} from 'react-router-dom'

import ThemeContext from '../../Context/ThemeContext'

import {GamingContainer, InfoList} from './styledComponents'

const GameItem = props => {
  const {gameDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gameDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const colorValue = isDark ? '#fff' : '#000'
        return (
          <GamingContainer isDark={isDark}>
            <Link
              to={`/videos/${id}`}
              style={{
                textDecoration: 'none',
                padding: 0,
              }}
            >
              <img
                style={{width: '100%'}}
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <InfoList isDark={isDark} style={{marginLeft: '10px'}}>
                <p
                  style={{
                    marginTop: '0',
                    marginBottom: '5px',
                    color: `${colorValue}`,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    marginTop: '0',
                    marginBottom: '5px',
                    color: `${colorValue}`,
                  }}
                >{`${viewCount} Watching Worldwide`}</p>
              </InfoList>
            </Link>
          </GamingContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GameItem
