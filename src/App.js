import React, { Component } from 'react';
import './styles/App.css';

import Header from './components/header/Header';
import EditArea from './components/editArea/EditArea';
import ResultArea from './components/resultArea/ResultArea';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: {
        num: 1,
        text: 'Main details',
      },
      personInfo: {
        jobTitle: 'Example of job title',
        picture: null,
        firstName: 'Name',
        lastName: 'Surname',
        email: 'example@email.com',
        phoneNumber: '+ 123 456 890',
        personalStatement:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        education: [
          {
            startDate: 'YYYY',
            endDate: 'YYYY',
            institution: 'Example of school name',
            location: 'City, Country',
            degree: 'BA in Example',
            description: 'e.g. Graduated with High Honors',
          },
          {
            startDate: 'YYYY',
            endDate: 'YYYY',
            institution: 'Example of school name',
            location: 'City, Country',
            degree: 'High School',
            description: '',
          },
        ],
        professionalExperience: [
          {
            startDate: 'MM YYYY',
            endDate: 'MM YYYY',
            company: 'Example of company name',
            location: 'Street name Str., City, Country',
            position: 'Position example',
            description: `- Consectetur adipiscing elit. - Sed do eiusmod tempor incididunt ut labore et.
            - Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            - Dolore magna aliqua. Ut enim ad minim veniam, quis.
            - Duis aute irure dolor in reprehenderit in voluptate velit pariatur.
            - Lorem ipsum dolor sit amet.`,
          },
          {
            startDate: 'YYYY',
            endDate: 'YYYY',
            company: 'Example of company name',
            location: 'Street name Str., City, Country',
            position: 'Position example',
            description: `- Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            - Consectetur adipiscing elit.
            - Sed do eiusmod tempor incididunt ut labore et.
            - Duis aute irure dolor in reprehenderit in voluptate velit pariatur.
            - Lorem ipsum dolor sit amet.
            - Dolore magna aliqua. Ut enim ad minim veniam, quis.`,
          },
        ],
      },
    };
  }

  handleJobTitleChange = (e) => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.personInfo.jobTitle = e.target.value;
      return { newState };
    });
  };

  handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.setState((prevState) => {
          let newState = { ...prevState };
          newState.personInfo.picture = e.target.result;
          return { newState };
        });
      };
      reader.readAsDataURL(file);
    }
  };

  handleFirstNameChange = (e) => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.personInfo.firstName = e.target.value;
      return { newState };
    });
  };

  handleLastNameChange = (e) => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.personInfo.lastName = e.target.value;
      return { newState };
    });
  };

  handlePhoneChange = (e) => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.personInfo.phoneNumber = e.target.value;
      return { newState };
    });
  };

  handleEmailChange = (e) => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.personInfo.email = e.target.value;
      return { newState };
    });
  };

  render() {
    const { currentStep, personInfo } = this.state;
    return (
      <>
        <Header currentStep={currentStep} />
        <EditArea
          handleJobTitleChange={this.handleJobTitleChange}
          handlePictureChange={this.handlePictureChange}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
          handleEmailChange={this.handleEmailChange}
          handlePhoneChange={this.handlePhoneChange}
        />
        <ResultArea personInfo={personInfo} />
      </>
    );
  }
}

export default App;
