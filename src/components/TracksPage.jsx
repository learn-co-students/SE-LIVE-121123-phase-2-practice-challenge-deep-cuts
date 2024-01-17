import React, { useState, useEffect } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {

  const [tracks, setTracks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:8001/tracks")
      .then(r => r.json())
      .then(setTracks)
  }, [])

  const addTrack = (newTrack) => {
    console.log("🚀 ~ addTrack ~ newTrack:", newTrack)
    setTracks([newTrack, ...tracks])
  }

  const filteredTracks = tracks.filter(track => {
    return track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            track.artist.toLowerCase().includes(searchTerm.toLowerCase())
  })
  
    
  return (
    <div>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <AddTrackForm onSubmitForm={addTrack}/>
      <TracksList tracks={filteredTracks} />
    </div>
  )
}

export default TracksPage