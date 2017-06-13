import React, { Component } from 'react'
import FlipMove from 'react-flip-move'

import Player from './player'

class PlayerList extends Component {

renderPlayer() {
  if (this.props.players.length === 0) {
    return(
      <div className="item">
        <p className="item__message">Adicione o 1° jogador</p>
      </div>
    )
  }
  return this.props.players.map(player => {
    return <Player key={player._id} player={player} />
  })
}

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayer()}
        </FlipMove>
      </div>
    );
  }
}

export default PlayerList;