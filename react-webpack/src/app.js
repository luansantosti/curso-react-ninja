'use stric'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render () {
    return (
      <div>
        {['blue', 'red', 'blue'].map((square, index) => ( 
          <div key={ index } color={ square }>
            Lista array: { square }
          </div>
        ))}
      </div>
    )
  }
}

export default App
