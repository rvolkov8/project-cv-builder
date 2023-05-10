import React, { Component } from 'react';
import '../../styles/header/Step.css';

class Step extends Component {
  render() {
    const { currentStep } = this.props;
    return (
      <div className="step-container">
        <div className="step-num">Step {currentStep.num} of 2</div>
        <div className="step-text">{currentStep.text}</div>
      </div>
    );
  }
}

export default Step;
