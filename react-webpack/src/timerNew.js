import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    super()
    this.state = {
      time: 0
    }
    this.timer;
  }

  // componentWillReceiveProps(nextProps) {
  //   this.timer = setInterval(() => {
  //     this.setState({
  //       timer: this.state.timer + nextProps
  //     })
  //   }, 1000)
  // }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      time: this.state.time + nextProps.time
    })
  }

  componentWillMount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        {this.state.time}
      </div>
    )
  }
}

export default Timer