import React from 'react'

export default function Sort({ sortBy, onChangeSort}) {
  return (
    <div className="search">
        <strong>Sort by:</strong>
        <label>
            <input
                type="radio"
                name="sort"
                value="artist"
                checked={sortBy === 'artist'}
                onChange={(e) => onChangeSort(e.target.value)}
            />
            Artist
        </label>
        <label>
            <input
                type="radio"
                name="sort"
                value="bpm"
                checked={sortBy === 'bpm'}
                onChange={(e) => onChangeSort(e.target.value)}
            />
            BPM
        </label>
    </div>
  )
}
