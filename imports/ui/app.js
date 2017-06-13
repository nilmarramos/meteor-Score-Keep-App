import React, { Component } from 'react';

import TitleBar from './titleBar'
import AddPlayer from './addPlayer'
import PlayerList from './playerList'

class App extends Component {
  render() {
    return (
      <div>
        <TitleBar title="Score Keep" />
        <div className="wrapper">
          <PlayerList players={this.props.players} />
          <AddPlayer title="Adicione um Jogador" />
        </div>
      </div>
    );
  }
}

export default App;