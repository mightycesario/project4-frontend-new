import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// import for our API request functions
import PlayerModel from '../models/player'

export class PlayerList extends Component {

  state = {
    players: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    PlayerModel.all().then(data => {
      this.setState({
        players: data.players
      })
    })
  }

  render() {
    return (
      <div>
        Players
      </div>
    )
  }
}

export default PlayerList
