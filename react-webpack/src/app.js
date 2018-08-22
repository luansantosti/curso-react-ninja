'use stric'

import React, { Component } from 'react'
import LikeButton from './likeButton'
import SearchButton from './searchButton';

class App extends Component {
  render () {
    return (
      <div>
        <LikeButton />
        <SearchButton/>
      </div>
    )
  }
}

export default App
