'use stric'

import React, { Component } from 'react'

import Timer from './timer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      showTimer: true,
      time: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentwillreceive')
  }

  render () {
    return (
      <div>
        { this.state.showTimer && <Timer time={this.state.time} /> }

        <button onClick={ () => {
          this.setState({
            showTimer: !this.state.showTimer
          })
        }}>Show / Hide timer</button>
      </div>
    )
  }
}

export default App
