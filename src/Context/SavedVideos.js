import React from 'react'

const SavedContext = React.createContext({
  savedVideos: [],
  likedVideos: [],
  dislikedVideos: [],
  toggleLiked: () => {},
  toggleDisliked: () => {},
  toggleSaved: () => {},
})

export default SavedContext
