import React from 'react'

const SavedContext = React.createContext({
  savedVideos: [],
  toggleSaved: () => {},
})

export default SavedContext
