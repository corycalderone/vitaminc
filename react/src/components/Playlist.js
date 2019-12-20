import React from 'react';

class Playlist extends React.Component {
    constructor(props) {
      super(props);
      this.playlist = props.playlist;
      this.onClick = this.onClick.bind(this);
    }
  
    onClick(e) {
      this.props.handler(e, this.props.playlistID);
    }
  
    render() {
      return <div className={this.props.className} onClick={this.onClick}>{this.playlist.name}</div>
    }
  }

  export default Playlist;