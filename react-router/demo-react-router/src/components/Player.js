import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null
    }
  }

  componentDidMount() {
    const player = PlayerAPI.get(
      parseInt(this.props.match.params.number, 10)
    )
    this.setState({ player })
  }

  render() {
    const { player } = this.state;
    if (!player) return <div>Sorry, but the player was not found</div>

    return (
      <div>
        <h1>{player.name} (#{player.number})</h1>
        <h2>Position: {player.position}</h2>
        <Link to='/roster'>Back</Link>
      </div>
    )
  }
}

export default Player
