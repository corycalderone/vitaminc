import React from 'react';
import PlaylistInfo from './PlaylistInfo'
import Playlist from './Playlist'

class PlaylistGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            selectedPlaylist: 'Select a playlist'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:5000/playlists')
            .then(res => res.json())
            .then(playlists => this.setState({ playlists }));
    }

    handleClick(e, id) {
        fetch('http://localhost:5000/playlist?id=' + id)
            .then(res => res.json())
            .then(data => this.setState({ selectedPlaylist: data.body }));
    }

    render() {
        const playlists = this.state.playlists;
        const playlistItems = playlists.map((playlist, index) =>
            <Playlist playlist = {playlist} playlistID = { playlist.id } className={playlist.id === this.state.selectedPlaylist.id ? 'playlists__playlist active' : 'playlists__playlist' } handler = { this.handleClick } key = { playlist.id }/>
        );
        return ( 
        <div className = "app__container" >
            <ul className="playlists">{ playlistItems }</ul> 
            <PlaylistInfo selectedPlaylist = { this.state.selectedPlaylist }/> 
        </div>
        );
    }
}

export default PlaylistGrid;