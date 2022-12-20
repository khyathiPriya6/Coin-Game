// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    head: 0,
    tail: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  randomValue = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        head: prevState.head + 1,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        tail: prevState.tail + 1,
      }))
    }
  }

  render() {
    const {total, head, tail, imgUrl} = this.state
    return (
      <div className="main-container">
        <div className="app-container">
          <h1 className="heading-style">Coin Toss Game</h1>
          <p className="para-style">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="coin-img" />
          <button className="toss-btn" type="submit" onClick={this.randomValue}>
            Toss Coin
          </button>
          <div className="toss-count">
            <p className="each-count">Total: {total} </p>
            <p className="each-count">Heads: {head} </p>
            <p className="each-count">Tails: {tail} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
