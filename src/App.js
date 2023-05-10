import React, { Component } from 'react';
import './styles/App.css';

import Header from './components/Header';
import EditArea from './components/EditArea';
import ResultArea from './components/ResultArea';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <EditArea />
        <ResultArea />
      </>
    );
  }
}

export default App;
