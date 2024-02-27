import {FaFire} from 'react-icons/fa'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import SavedVideoItem from '../SavedVideoItem'

import ThemeContext from '../../Context/ThemeContext'
import SavedContext from '../../Context/SavedVideos'

import {
  FailureContainer,
  FailHeading,
  Desc,
  SavedVideoRoute,
  Banner,
  LogoContainer,
  VideosList,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => (
      <SavedContext.Consumer>
        {saveValue => {
          const {savedVideos} = saveValue
          const isEmpty = savedVideos.length > 0
          const {isDark} = value
          console.log(isEmpty)

          const renderNoVideos = () => (
            <FailureContainer>
              <img
                style={{width: '60%', maxWidth: '300px'}}
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <FailHeading isDark={isDark}>No saved videos found</FailHeading>
              <Desc isDark={isDark}>
                You can save your videos while watching them
              </Desc>
            </FailureContainer>
          )

          const renderBanner = () => (
            <Banner isDark={isDark} data-testid="banner">
              <LogoContainer isDark={isDark}>
                <FaFire size={30} color="#ff0000" />
              </LogoContainer>
              <h1 style={{fontSize: '24px'}}>Saved Videos</h1>
            </Banner>
          )

          const renderSavedVideos = () => (
            <div>
              {renderBanner()}
              <VideosList>
                {savedVideos.map(each => (
                  <SavedVideoItem videoDetails={each} key={each.id} />
                ))}
              </VideosList>
            </div>
          )

          return (
            <div data-testid="savedVideos">
              <Navbar />
              <div style={{display: 'flex'}}>
                <Sidebar />
                <SavedVideoRoute isDark={isDark}>
                  {!isEmpty ? renderNoVideos() : renderSavedVideos()}
                </SavedVideoRoute>
              </div>
            </div>
          )
        }}
      </SavedContext.Consumer>
    )}
  </ThemeContext.Consumer>
)

export default SavedVideos
