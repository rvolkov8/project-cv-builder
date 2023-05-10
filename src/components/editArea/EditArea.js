import React, { Component } from 'react';
import '../../styles/editArea/EditArea.css';
import MainInfoForm from './MainInfoForm';

class EditArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="edit-area-container">
        <div className="main-prompt">
          How can employers get in touch with you?
        </div>
        <MainInfoForm />
        <div className="agreement">
          By clicking "Continue" you agree to to our{' '}
          <span className="underlined">terms</span> and{' '}
          <span className="underlined">privacy policy</span>
        </div>
        <button className="continue-button">Continue</button>
      </div>
    );
  }
}

export default EditArea;
