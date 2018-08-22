'use stric'

import React, { Component } from 'react'
import LikeButton from './likeButton'
import SearchButton from './searchButton';

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'Fernando'
    }
  }

  render () {
    return (
      <div onClick={ () => this.setState({text: 'Daciuk'})}>
        {this.state.text}
        <LikeButton />
        <SearchButton/>
      </div>
    )
  }
}

export default App
