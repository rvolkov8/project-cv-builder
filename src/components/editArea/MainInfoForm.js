import React, { Component } from 'react';
import '../../styles/editArea/MainInfoForm.css';

class MainInfoForm extends Component {
  render() {
    const {
      currentStep,
      personInfo,
      handleJobTitleChange,
      picture,
      handlePictureChange,
      handleFirstNameChange,
      handleLastNameChange,
      handleEmailChange,
      handlePhoneChange,
    } = this.props;
    const { jobTitle, firstName, lastName, email, phoneNumber } = personInfo;
    return (
      <div className="main-info-form-container">
        <form className="main-info-form" noValidate>
          <div className="job-title">
            <label htmlFor="job-title">Desired Job Title</label>
            <input
              {...(currentStep.isReturned && { value: jobTitle })}
              onChange={handleJobTitleChange}
              type="text"
              id="job-title"
              placeholder="e.g. Node.js Developer"
              maxLength={50}
            />
          </div>
          <div className="picture">
            <label>Picture</label>
            <input onChange={handlePictureChange} type="file" id="picture" />
            <label htmlFor="picture">
              {picture.url !== null ? picture.name : 'Choose a file'}
            </label>
          </div>
          <div className="first-name">
            <label htmlFor="first-name">First name</label>
            <input
              {...(currentStep.isReturned && { value: firstName })}
              onChange={handleFirstNameChange}
              type="text"
              id="first-name"
              placeholder="John"
              maxLength={100}
            />
          </div>
          <div className="last-name">
            <label htmlFor="last-name">Last name</label>
            <input
              {...(currentStep.isReturned && { value: lastName })}
              onChange={handleLastNameChange}
              type="text"
              id="last-name"
              placeholder="Newman"
              maxLength={100}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              {...(currentStep.isReturned && { value: email })}
              onChange={handleEmailChange}
              type="email"
              id="email"
              placeholder="john.newman@email.com"
              maxLength={320}
            />
          </div>
          <div className="phone-number">
            <label htmlFor="tel">Phone number</label>
            <input
              {...(currentStep.isReturned && { value: phoneNumber })}
              onChange={handlePhoneChange}
              type="tel"
              id="tel"
              placeholder="+359 123 456 890"
              maxLength={16}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default MainInfoForm;
