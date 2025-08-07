// src/components/CurrencyConvertor.js
import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: '',
    };
  }

  handleChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = () => {
    const euroValue = parseFloat(this.state.rupees) / 88; // Approx rate
    this.setState({ euro: euroValue.toFixed(2) });
  };

  render() {
    return (
      <div>
        <h2>Currency Converter</h2>
        <input
          type="text"
          placeholder="Enter amount in ₹"
          value={this.state.rupees}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Convert to €</button>

        {this.state.euro && (
          <p>Converted Value: €{this.state.euro}</p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
