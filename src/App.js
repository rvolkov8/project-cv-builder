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
        isReturned: false,
      },
      personInfo: {
        jobTitle: '',
        picture: {
          url: null,
          name: '',
        },
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        personalStatement: '',
        education: [
          {
            institution: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
            description: '',
          },
        ],
        professionalExperience: [
          {
            jobTitle: '',
            company: '',
            startDate: '',
            endDate: '',
            location: '',
            description: ``,
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
          newState.personInfo.picture.name = file.name;
          newState.personInfo.picture.url = e.target.result;
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

  handleContinueClick = () => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.currentStep.num = 2;
      newState.currentStep.text = 'Personal details';
      return { newState };
    });
  };

  handlePreviousStepClick = () => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.currentStep.num = 1;
      newState.currentStep.text = 'Main details';
      newState.currentStep.isReturned = true;
      return { newState };
    });
  };

  handlePersonalStatementChange = (e) => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.personInfo.personalStatement = e.target.value;
      return { newState };
    });
  };

  handleEducationsNumChange = () => {
    this.setState((prevState) => {
      const { personInfo } = prevState;
      const { education } = personInfo;

      const newEducation = {
        institution: 'Example of school name',
        degree: 'BA in Example',
        startDate: 'YYYY',
        endDate: 'YYYY',
        location: 'City, Country',
        description: 'e.g. Graduated with High Honors',
      };

      const updatedEducation = [...education, newEducation];

      const newState = {
        ...prevState,
        personInfo: {
          ...personInfo,
          education: updatedEducation,
        },
      };

      return newState;
    });
  };

  handleEducationInstitutionChange = (e, index) => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.personInfo.education[index].institution = e.target.value;
      return newState;
    });
  };

  handleEducationDegreeChange = (e, index) => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.personInfo.education[index].degree = e.target.value;
      return newState;
    });
  };

  handleEducationStartDataChange = (e, index) => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.personInfo.education[index].startDate = e.target.value;
      return newState;
    });
  };

  handleEducationEndDataChange = (e, index) => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.personInfo.education[index].endDate = e.target.value;
      return newState;
    });
  };

  handleEducationLocationChange = (e, index) => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.personInfo.education[index].location = e.target.value;
      return newState;
    });
  };

  handleEducationDescriptionChange = (e, index) => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.personInfo.education[index].description = e.target.value;
      return newState;
    });
  };

  handleEmploymentsNumChange = () => {
    this.setState((prevState) => {
      const { personInfo } = prevState;
      const { professionalExperience } = personInfo;

      const newEmployment = {
        jobTitle: 'Job Title example',
        company: 'Example of company name',
        startDate: 'MM YYYY',
        endDate: 'MM YYYY',
        location: 'Street name Str., City, Country',
        description: `- Consectetur adipiscing elit. - Sed do eiusmod tempor incididunt ut labore et.
        - Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        - Dolore magna aliqua. Ut enim ad minim veniam, quis.
        - Duis aute irure dolor in reprehenderit in voluptate velit pariatur.
        - Lorem ipsum dolor sit amet.`,
      };

      const updatedEmployments = [...professionalExperience, newEmployment];

      const newState = {
        ...prevState,
        personInfo: {
          ...personInfo,
          professionalExperience: updatedEmployments,
        },
      };

      return newState;
    });
  };

  handleEmploymentJobTitleChange = (e, index) => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.personInfo.professionalExperience[index].jobTitle =
        e.target.value;
      return newState;
    });
  };

  handleEmploymentCompanyChange = (e, index) => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.personInfo.professionalExperience[index].company =
        e.target.value;
      return newState;
    });
  };

  handleEmploymentStartDateChange = (e, index) => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.personInfo.professionalExperience[index].startDate =
        e.target.value;
      return newState;
    });
  };

  handleEmploymentEndDateChange = (e, index) => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.personInfo.professionalExperience[index].endDate =
        e.target.value;
      return newState;
    });
  };

  handleEmploymentLocationChange = (e, index) => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.personInfo.professionalExperience[index].location =
        e.target.value;
      return newState;
    });
  };

  handleEmploymentDescriptionChange = (e, index) => {
    this.setState((prevState) => {
      const newState = { ...prevState };
      newState.personInfo.professionalExperience[index].description =
        e.target.value;
      return newState;
    });
  };

  render() {
    const { currentStep, personInfo } = this.state;
    const { picture, education, professionalExperience } = personInfo;
    return (
      <>
        <Header currentStep={currentStep} />
        <EditArea
          currentStep={currentStep}
          personInfo={personInfo}
          handleJobTitleChange={this.handleJobTitleChange}
          picture={picture}
          handlePictureChange={this.handlePictureChange}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
          handleEmailChange={this.handleEmailChange}
          handlePhoneChange={this.handlePhoneChange}
          handleContinueClick={this.handleContinueClick}
          handlePreviousStepClick={this.handlePreviousStepClick}
          handlePersonalStatementChange={this.handlePersonalStatementChange}
          education={education}
          handleEducationsNumChange={this.handleEducationsNumChange}
          handleEducationInstitutionChange={
            this.handleEducationInstitutionChange
          }
          handleEducationDegreeChange={this.handleEducationDegreeChange}
          handleEducationStartDataChange={this.handleEducationStartDataChange}
          handleEducationEndDataChange={this.handleEducationEndDataChange}
          handleEducationLocationChange={this.handleEducationLocationChange}
          handleEducationDescriptionChange={
            this.handleEducationDescriptionChange
          }
          professionalExperience={professionalExperience}
          handleEmploymentsNumChange={this.handleEmploymentsNumChange}
          handleEmploymentJobTitleChange={this.handleEmploymentJobTitleChange}
          handleEmploymentCompanyChange={this.handleEmploymentCompanyChange}
          handleEmploymentStartDateChange={this.handleEmploymentStartDateChange}
          handleEmploymentEndDateChange={this.handleEmploymentEndDateChange}
          handleEmploymentLocationChange={this.handleEmploymentLocationChange}
          handleEmploymentDescriptionChange={
            this.handleEmploymentDescriptionChange
          }
        />
        <ResultArea personInfo={personInfo} />
      </>
    );
  }
}

export default App;
