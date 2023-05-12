import React, { Component } from 'react';
import '../../styles/editArea/EditArea.css';
import MainInfoForm from './MainInfoForm';
import PersonalDetailsForm from './PersonalDetailsForm';

class EditArea extends Component {
  render() {
    const { currentStep, handleContinueClick } = this.props;
    return (
      <div className="edit-area-container">
        {currentStep.num === 1 ? (
          <>
            <div className="main-prompt">
              How can employers get in touch with you?
            </div>
            <MainInfoForm {...this.props} />
            <div className="agreement">
              By clicking "Continue" you agree to to our{' '}
              <span className="underlined">terms</span> and{' '}
              <span className="underlined">privacy policy</span>
            </div>
            <button onClick={handleContinueClick} className="continue-button">
              Continue
            </button>
          </>
        ) : (
          <>
            <div className="main-prompt">
              Provide some additional information for your future employer
            </div>
            <PersonalDetailsForm {...this.props} />
            <button className="download-button">Download CV</button>
          </>
        )}
      </div>
    );
  }
}

export default EditArea;
