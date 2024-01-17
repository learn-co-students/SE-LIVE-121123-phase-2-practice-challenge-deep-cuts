import React, { useState, useEffect } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {

  const [tracks, setTracks] = useState([])

  useEffect(() => {
    fetch("http://localhost:8001/tracks")
      .then(r => r.json())
      .then(setTracks)
  }, [])

  const addTrack = (newTrack) => {
    console.log("🚀 ~ addTrack ~ newTrack:", newTrack)
    setTracks([newTrack, ...tracks])
  }
  
    
  return (
    <div>
      <Search />
      <AddTrackForm onSubmitForm={addTrack}/>
      <TracksList tracks={tracks} />
    </div>
  )
}

export default TracksPage