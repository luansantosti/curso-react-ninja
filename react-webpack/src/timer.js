import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
        time: 0
    }

    this.timer;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  shouldComponentUpdate (nextProps,nextState) {
    console.log(nextState.time)
    if(nextState.time > 5 ) {
      return false
    } else {
      return true
    }
  }

  render () {
    return <div>Timer: { this.state.time }</div>
  }
}

export default Timer