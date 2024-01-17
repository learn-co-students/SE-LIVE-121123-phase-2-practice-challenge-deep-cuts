import React, { useState } from 'react'

const initialFormState = {
  image: "",
  title: "",
  artist: "",
  BPM: ""
}

function AddTrackForm({ onSubmitForm }) {

  const [formData, setFormData] = useState(initialFormState)

  const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value})

  const handleSubmit = e => {
    e.preventDefault()
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        BPM: parseInt(formData.BPM)
      })
    }
    fetch("http://localhost:8001/tracks", config)
      .then(r => r.json())
      .then(onSubmitForm)
    setFormData(initialFormState)
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleChange} value={formData.title} type="text" name="title" placeholder="title" />
          <input onChange={handleChange} value={formData.artist} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleChange} value={formData.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm