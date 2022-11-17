import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  countingLength = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="background-container">
        <div className="app-container">
          <div className="calculation-container">
            <h1 className="heading"> Calculate the Letters you enter</h1>

            <div className="input-element-container">
              <label className="para" htmlFor="input-element-com">
                Enter the phrase
              </label>
              <input
                type="text"
                className="input-element"
                placeholder="Enter the phrase"
                onChange={this.countingLength}
                id="input-element-com"
                value={inputPhrase}
              />
            </div>

            <p className="button-style" type="button">
              No.of letters: {inputPhrase.length}
            </p>
          </div>

          <div className="image-container">
            <img
              className="image-style"
              alt="letters calculator"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
