import React, { Component } from 'react';
import './styles/App.css';

import Header from './components/header/Header';
import EditArea from './components/editArea/EditArea';
import ResultArea from './components/ResultArea';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: {
        num: 1,
        text: 'Main details',
      },
    };
  }

  render() {
    const { currentStep } = this.state;
    return (
      <>
        <Header currentStep={currentStep} />
        <EditArea />
        <ResultArea />
      </>
    );
  }
}

export default App;
