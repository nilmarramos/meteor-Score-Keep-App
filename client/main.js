import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players, calculatePlayerPositions } from '../imports/api/players'
import App from '../imports/ui/app'


Meteor.startup(() => {
  Tracker.autorun(() => {
    const player = Players.find({}, {sort: {score: -1}}).fetch()
    const positionedPlayers = calculatePlayerPositions(player)
  
    render(<App players={positionedPlayers}/>, document.getElementById('app'))
  })
}) 