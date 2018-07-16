import React, {Component} from 'react'
import './../styles/playerBar.css'

class PlayerBar extends Component {
  render () {
    return (
      <section className='player-bar'>

        <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="player-icon ion-ios-skipbackward"></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className={'play-icon ' + (this.props.isPlaying ? 'ion-ios-pause' : 'ion-ios-play')}></span>
          </button>
          <button id="next" onClick= {this.props.handleNextClick} >
            <span className="player-icon ion-ios-skipforward"></span>
          </button>
        </section>

        <section id="time-control">
          <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
        </section>

        <section id="volume-control">
          <div className="volume-icon ion-volume-medium"></div>
          <input
            type="range"
            className="volume-bar"
            max="1"
            min="0"
            step=".01"
            onChange={this.props.handleSetVolume}
          />
          <div className="icon ion-volume-high"></div>
        </section>
     </section>
    )
  }
}

export default PlayerBar
