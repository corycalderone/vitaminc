import React from 'react';
import Track from './Track'

function PlaylistInfo(props) {
    const selectedPlaylist = props.selectedPlaylist
    if (selectedPlaylist.id) {
        const tracks = selectedPlaylist.tracks.items.map((trackObj, index) =>
            <Track track = { trackObj }/>
        );
        return ( 
            <ul className="info">{ tracks }</ul>
        );
    } else {
        return (
        <div className="info">
            <p>Click a playlist to explore!</p>
        </div>
        );
            
    }
}

export default PlaylistInfo;