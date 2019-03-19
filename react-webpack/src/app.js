'use stric'

import React, { Component } from 'react'
import Square from './square'
import Button from './button'
import Timer from './timerNew'


class App extends Component {
  constructor() {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }
  render () {
    return (
      <div>
        <label>
          <input 
            type="checkbox" 
            value={this.state.checked} 
            onChange={ () => {
              this.setState({
                checked: !this.state.checked
              }, () => {
                this.setState({
                  showContent: this.state.checked
                })
              })
            }}
          />
          Mostrar conteúdo
        </label>
         
        { this.state.showContent && <div>Conteúdo aqui</div> }

      </div>
    )
  }
}

export default App
