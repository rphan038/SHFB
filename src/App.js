import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Popup from './components/popup.js'
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showPopup: false};
  }

  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup});
  }
  render() {
    return (
      <div>
        <h1>Popup Trial</h1>
        <button onClick={this.togglePopup.bind(this)}>Click</button>
        {this.state.showPopup ? <Popup text='Close' closePopup={this.togglePopup.bind(this)}/> : null}
      </div>
    );
  }
}

export default App;
