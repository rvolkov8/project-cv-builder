import React from 'react';
import '../../styles/editArea/MainInfoForm.css';

const MainInfoForm = (props) => {
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
  } = props;
  const { jobTitle, firstName, lastName, email, phoneNumber } = personInfo;

  const checkIfEmpty = (e) => {
    if (e.target.value.trim() === '') {
      e.target.classList.add('invalid');
      e.target.classList.remove('valid');
    } else {
      e.target.classList.remove('invalid');
      e.target.classList.add('valid');
    }
  };

  const checkEmailValidity = (e) => {
    const emailRegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValid = emailRegExp.test(e.target.value);
    if (isValid) {
      e.target.classList.remove('invalid');
      e.target.classList.add('valid');
    } else {
      e.target.classList.add('invalid');
      e.target.classList.remove('valid');
    }
  };

  const checkPhoneNumberValidity = (e) => {
    const firstPhoneNumberRegExp = /^\+\d{3}(?:\s?\d{3}){3}$/;
    const isValid = firstPhoneNumberRegExp.test(e.target.value);
    if (isValid) {
      e.target.classList.remove('invalid');
      e.target.classList.add('valid');
    } else {
      e.target.classList.add('invalid');
      e.target.classList.remove('valid');
    }
  };

  return (
    <div className="main-info-form-container">
      <form className="main-info-form" noValidate>
        <div className="job-title">
          <label htmlFor="job-title">Desired Job Title</label>
          <input
            {...(currentStep.isReturned && { value: jobTitle })}
            onChange={(e) => {
              handleJobTitleChange(e);
              checkIfEmpty(e);
            }}
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
            onChange={(e) => {
              handleFirstNameChange(e);
              checkIfEmpty(e);
            }}
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
            onChange={(e) => {
              handleLastNameChange(e);
              checkIfEmpty(e);
            }}
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
            onChange={(e) => {
              handleEmailChange(e);
              checkEmailValidity(e);
            }}
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
            onChange={(e) => {
              handlePhoneChange(e);
              checkPhoneNumberValidity(e);
            }}
            type="tel"
            id="tel"
            placeholder="+359 123 456 890"
            maxLength={16}
          />
        </div>
      </form>
    </div>
  );
};

export default MainInfoForm;
