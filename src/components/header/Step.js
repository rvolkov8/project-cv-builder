import React from 'react';
import '../../styles/header/Step.css';

const Step = (props) => {
  const { currentStep } = props;
  return (
    <div className="step-container">
      <div className="step-num">Step {currentStep.num} of 2</div>
      <div className="step-text">{currentStep.text}</div>
    </div>
  );
};

export default Step;
