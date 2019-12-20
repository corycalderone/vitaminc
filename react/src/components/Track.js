import React from 'react';

function Track(props) {
    const track = props.track.track;
    const artists = track.artists.map((artist, index) => artist.name).join(', ');
    return (
      <div className="song-block">
        <img src={props.track.track.album.images[1].url} alt="album art"/>
        <div className="song-detail">
          <p className="song-text">{track.name} - {artists}</p>
          <p>Test</p>
        </div>
      </div>
    );
  }

  export default Track;