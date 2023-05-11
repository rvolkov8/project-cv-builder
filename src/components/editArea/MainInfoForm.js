import React, { Component } from 'react';
import '../../styles/editArea/MainInfoForm.css';

class MainInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      handleJobTitleChange,
      picture,
      handlePictureChange,
      handleFirstNameChange,
      handleLastNameChange,
      handleEmailChange,
      handlePhoneChange,
    } = this.props;
    return (
      <div className="main-info-form-container">
        <form novalidate>
          <div className="job-title">
            <label htmlFor="job-title">Desired Job Title</label>
            <input
              onChange={handleJobTitleChange}
              type="text"
              id="job-title"
              placeholder="e.g. Node.js Developer"
            />
          </div>
          <div className="picture">
            <label>Picture</label>
            <input onChange={handlePictureChange} type="file" id="picture" />
            <label for="picture">
              {picture.url !== null ? picture.name : 'Choose a file'}
            </label>
          </div>
          <div className="first-name">
            <label htmlFor="first-name">First name</label>
            <input
              onChange={handleFirstNameChange}
              type="text"
              id="first-name"
              placeholder="John"
            />
          </div>
          <div className="last-name">
            <label htmlFor="last-name">Last name</label>
            <input
              onChange={handleLastNameChange}
              type="text"
              id="last-name"
              placeholder="Newman"
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleEmailChange}
              type="email"
              id="email"
              placeholder="john.newman@email.com"
            />
          </div>
          <div className="phone-number">
            <label htmlFor="tel">Phone number</label>
            <input
              onChange={handlePhoneChange}
              type="tel"
              id="tel"
              placeholder="+359 123 456 890"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default MainInfoForm;
