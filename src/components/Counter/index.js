//curley brases is update
import {Component} from 'react'

import './index.css'
//fix the messing extends

class Counter extends Component {
  state = {count: 0}

  // fix steState method
  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  // fix steState method
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    //const is update
    const {count} = this.state

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>

        <button className="button" onClick={this.onIncrement} type="button">
          Increase
        </button>

        <button className="button" onClick={this.onDecrement} type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
