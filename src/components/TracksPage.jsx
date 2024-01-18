import React, { useState, useEffect } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'
import Sort from './Sort'

function TracksPage() {

  const [tracks, setTracks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("artist")

  const url = "http://localhost:8001/tracks"

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(setTracks)
  }, [])

  const addTrack = (newTrack) => {
    console.log("🚀 ~ addTrack ~ newTrack:", newTrack)
    setTracks([newTrack, ...tracks])
  }

  const deleteTrack = id => {
    fetch(`${url}/${id}`, { method: 'DELETE' })
  }

  const removeTrack = (trackId) => {
    console.log("🚀 ~ TracksPage ~ trackId:", trackId)
    deleteTrack(trackId)
    setTracks(tracks.filter(track => track.id !== trackId))
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