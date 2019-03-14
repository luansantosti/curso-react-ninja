'use stric'

import React, { Component } from 'react'
import Square from './square'
import Button from './button'
import Timer from './timerNew'


class App extends Component {
  constructor() {
    super()
    this.state = {
      timer: 0
    }
  }
  render () {
    return (
      <div>
        {/* <Square color={this.state.color} />

        {['red', 'yellow', 'blue'].map( color => (
          <Button key={color} handleClick={() => (this.setState({ color }))}>{color}</Button>
        ))} */}

        <Timer time={this.state.timer}/>

        <button onClick={() => (this.setState({ timer: 10}))}> Add 10</button>

      </div>
    )
  }
}

export default App
