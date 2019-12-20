import React from 'react';
import PlaylistGrid from './components/PlaylistGrid'
import './App.css';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Welcome/>
        <PlaylistGrid/>
      </div>
    );
  }
}

function Welcome() {
  return <h1>Welcome to Vitamin C</h1>
}

export default App;