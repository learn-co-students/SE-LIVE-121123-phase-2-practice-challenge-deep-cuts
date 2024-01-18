import React, { useState, useEffect } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'
import Sort from './Sort'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

function TracksPage() {

  const [tracks, setTracks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("artist")

  useEffect(() => {
    fetch("http://localhost:8001/tracks")
      .then(r => r.json())
      .then(setTracks)
  }, [])

  const addTrack = (newTrack) => {
    console.log("🚀 ~ addTrack ~ newTrack:", newTrack)
    setTracks([newTrack, ...tracks])
  }

  const removeTrack = (trackId) => {
    console.log("🚀 ~ TracksPage ~ trackId:", trackId)

  }

  const filteredTracks = tracks.filter(track => {
    return track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            track.artist.toLowerCase().includes(searchTerm.toLowerCase())
  })
    .sort((track1, track2) => {
      if (sortBy === 'artist') {
        return track1.artist.localeCompare(track2.artist)
      } else {
        return track1.BPM - track2.BPM
      }
    })
  
    
  return (
    <div>
      <Sort sortBy={sortBy} onChangeSort={setSortBy} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <AddTrackForm onSubmitForm={addTrack}/>
      <TracksList tracks={filteredTracks} onDelete={removeTrack}/>
    </div>
  )
}

export default TracksPage