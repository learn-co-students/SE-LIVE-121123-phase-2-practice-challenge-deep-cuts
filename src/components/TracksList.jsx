import React from 'react'
import Track from './Track'

function TracksList({ tracks, onDelete }) {

  const trackComps = tracks.map(track => <Track key={track.id} {...track} onDelete={onDelete}/>)

  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {trackComps}
      </tbody>
    </table>
  )
}

export default TracksList