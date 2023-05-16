import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/App.css';

import Header from './components/header/Header';
import EditArea from './components/editArea/EditArea';
import ResultArea from './components/resultArea/ResultArea';

const App = () => {
  const [currentStep, setCurrentStep] = useState({
    num: 1,
    text: 'Main details',
    isReturned: false,
  });
  const [personInfo, setPersonInfo] = useState({
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
        id: uuidv4(),
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
        id: uuidv4(),
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        location: '',
        description: ``,
      },
    ],
  });

  const handleJobTitleChange = (e) => {
    setPersonInfo((prevState) => {
      let newState = { ...prevState };
      newState.jobTitle = e.target.value;
      return newState;
    });
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPersonInfo((prevState) => {
          let newState = { ...prevState };
          newState.picture.name = file.name;
          newState.picture.url = e.target.result;
          return newState;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFirstNameChange = (e) => {
    setPersonInfo((prevState) => {
      let newState = { ...prevState };
      newState.firstName = e.target.value;
      return newState;
    });
  };

  const handleLastNameChange = (e) => {
    setPersonInfo((prevState) => {
      let newState = { ...prevState };
      newState.lastName = e.target.value;
      return newState;
    });
  };

  const handlePhoneChange = (e) => {
    setPersonInfo((prevState) => {
      let newState = { ...prevState };
      newState.phoneNumber = e.target.value;
      return newState;
    });
  };

  const handleEmailChange = (e) => {
    setPersonInfo((prevState) => {
      let newState = { ...prevState };
      newState.email = e.target.value;
      return newState;
    });
  };

  const handleContinueClick = () => {
    setCurrentStep((prevState) => {
      let newState = { ...prevState };
      newState.num = 2;
      newState.text = 'Personal details';
      return newState;
    });
  };

  const handlePreviousStepClick = () => {
    setCurrentStep((prevState) => {
      let newState = { ...prevState };
      newState.num = 1;
      newState.text = 'Main details';
      newState.isReturned = true;
      return newState;
    });
  };

  const handlePersonalStatementChange = (e) => {
    setPersonInfo((prevState) => {
      let newState = { ...prevState };
      newState.personalStatement = e.target.value;
      return newState;
    });
  };

  const handleEducationsNumChange = () => {
    setPersonInfo((prevState) => {
      const { education } = prevState;

      const newEducation = {
        id: uuidv4(),
        institution: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
      };

      const updatedEducation = [...education, newEducation];

      const newState = {
        ...prevState,
        education: updatedEducation,
      };

      return newState;
    });
  };

  const handleEducationInstitutionChange = (e, index) => {
    setPersonInfo((prevState) => {
      const newState = { ...prevState };
      newState.education[index].institution = e.target.value;
      return newState;
    });
  };

  const handleEducationDegreeChange = (e, index) => {
    setPersonInfo((prevState) => {
      const newState = { ...prevState };
      newState.education[index].degree = e.target.value;
      return newState;
    });
  };

  const handleEducationStartDataChange = (e, index) => {
    setPersonInfo((prevState) => {
      const newState = { ...prevState };
      newState.education[index].startDate = e.target.value;
      return newState;
    });
  };

  const handleEducationEndDataChange = (e, index) => {
    setPersonInfo((prevState) => {
      const newState = { ...prevState };
      newState.education[index].endDate = e.target.value;
      return newState;
    });
  };

  const handleEducationLocationChange = (e, index) => {
    setPersonInfo((prevState) => {
      const newState = { ...prevState };
      newState.education[index].location = e.target.value;
      return newState;
    });
  };

  const handleEducationDescriptionChange = (e, index) => {
    setPersonInfo((prevState) => {
      const newState = { ...prevState };
      newState.education[index].description = e.target.value;
      return newState;
    });
  };

  const deleteEducationElement = (id) => {
    setPersonInfo((prevState) => {
      const newEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return {
        ...prevState,
        education: newEducation,
      };
    });
  };

  const handleEmploymentsNumChange = () => {
    setPersonInfo((prevState) => {
      const { professionalExperience } = prevState;

      const newEmployment = {
        id: uuidv4(),
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        location: '',
        description: ``,
      };

      const updatedEmployments = [...professionalExperience, newEmployment];

      const newState = {
        ...prevState,
        professionalExperience: updatedEmployments,
      };

      return newState;
    });
  };

  const handleEmploymentJobTitleChange = (e, index) => {
    setPersonInfo((prevState) => {
      const newState = { ...prevState };
      newState.professionalExperience[index].jobTitle = e.target.value;
      return newState;
    });
  };

  const handleEmploymentCompanyChange = (e, index) => {
    setPersonInfo((prevState) => {
      const newState = { ...prevState };
      newState.professionalExperience[index].company = e.target.value;
      return newState;
    });
  };

  const handleEmploymentStartDateChange = (e, index) => {
    setPersonInfo((prevState) => {
      const newState = { ...prevState };
      newState.professionalExperience[index].startDate = e.target.value;
      return newState;
    });
  };

  const handleEmploymentEndDateChange = (e, index) => {
    setPersonInfo((prevState) => {
      const newState = { ...prevState };
      newState.professionalExperience[index].endDate = e.target.value;
      return newState;
    });
  };

  const handleEmploymentLocationChange = (e, index) => {
    setPersonInfo((prevState) => {
      const newState = { ...prevState };
      newState.professionalExperience[index].location = e.target.value;
      return newState;
    });
  };

  const handleEmploymentDescriptionChange = (e, index) => {
    setPersonInfo((prevState) => {
      const newState = { ...prevState };
      newState.professionalExperience[index].description = e.target.value;
      return newState;
    });
  };

  const deleteEmploymentElement = (id) => {
    setPersonInfo((prevState) => {
      const newProfessionalExperience = prevState.professionalExperience.filter(
        (professionalExperienceItem) => professionalExperienceItem.id !== id
      );
      return {
        ...prevState,
        professionalExperience: newProfessionalExperience,
      };
    });
  };

  const checkIfMainInfoIsFilled = () => {
    const { jobTitle, firstName, lastName, email, phoneNumber } = personInfo;
    if (
      jobTitle.trim() !== '' ||
      firstName.trim() !== '' ||
      lastName.trim() !== '' ||
      email.trim() !== '' ||
      phoneNumber.trim() !== ''
    ) {
      return true;
    } else {
      return false;
    }
  };

  const { picture, education, professionalExperience } = personInfo;
  return (
    <>
      <Header currentStep={currentStep} />
      <EditArea
        currentStep={currentStep}
        personInfo={personInfo}
        handleJobTitleChange={handleJobTitleChange}
        picture={picture}
        handlePictureChange={handlePictureChange}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleEmailChange={handleEmailChange}
        handlePhoneChange={handlePhoneChange}
        handleContinueClick={handleContinueClick}
        handlePreviousStepClick={handlePreviousStepClick}
        handlePersonalStatementChange={handlePersonalStatementChange}
        education={education}
        handleEducationsNumChange={handleEducationsNumChange}
        handleEducationInstitutionChange={handleEducationInstitutionChange}
        handleEducationDegreeChange={handleEducationDegreeChange}
        handleEducationStartDataChange={handleEducationStartDataChange}
        handleEducationEndDataChange={handleEducationEndDataChange}
        handleEducationLocationChange={handleEducationLocationChange}
        handleEducationDescriptionChange={handleEducationDescriptionChange}
        deleteEducationElement={deleteEducationElement}
        professionalExperience={professionalExperience}
        handleEmploymentsNumChange={handleEmploymentsNumChange}
        handleEmploymentJobTitleChange={handleEmploymentJobTitleChange}
        handleEmploymentCompanyChange={handleEmploymentCompanyChange}
        handleEmploymentStartDateChange={handleEmploymentStartDateChange}
        handleEmploymentEndDateChange={handleEmploymentEndDateChange}
        handleEmploymentLocationChange={handleEmploymentLocationChange}
        handleEmploymentDescriptionChange={handleEmploymentDescriptionChange}
        deleteEmploymentElement={deleteEmploymentElement}
        checkIfMainInfoIsFilled={checkIfMainInfoIsFilled}
      />
      <ResultArea personInfo={personInfo} />
    </>
  );
};

export default App;
