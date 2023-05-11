import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiWeb, mdiPhone, mdiAccount } from '@mdi/js';
import '../../styles/resultArea/CV.css';
import EducationElement from './EducationElement';
import ProfessionalExperienceElement from './ProfessionalExperienceElement';

class CV extends Component {
  render() {
    const { personInfo } = this.props;
    const {
      email,
      phoneNumber,
      education,
      firstName,
      lastName,
      jobTitle,
      personalStatement,
      professionalExperience,
    } = personInfo;
    return (
      <div className="cv">
        <div className="left-side">
          <div className="photo">
            <Icon path={mdiAccount} size={2.5} color="#272828" />
          </div>
          <div className="contacts">
            <div className="left-side-heading">Contacts</div>
            <div className="left-side-divider"></div>
            <div className="contacts-element-container">
              <Icon path={mdiWeb} size={0.5} color="#fbfbfd" />
              <div className="contacts-element-info">
                <div className="contacts-element-heading">Email</div>
                <div className="contacts-element-text">{email}</div>
              </div>
            </div>
            <div className="contacts-element-container">
              <Icon path={mdiPhone} size={0.5} color="#fbfbfd" />
              <div className="contacts-element-info">
                <div className="contacts-element-heading">Email</div>
                <div className="contacts-element-text">{phoneNumber}</div>
              </div>
            </div>
          </div>
          <div className="education">
            <div className="left-side-heading">Education</div>
            <div className="left-side-divider"></div>
            <EducationElement education={education} />
          </div>
        </div>
        <div className="right-side">
          <div className="name">
            {firstName} {lastName}
          </div>
          <div className="result-job-title">{jobTitle}</div>
          <div className="personal-statement">{personalStatement}</div>
          <ProfessionalExperienceElement
            professionalExperience={professionalExperience}
          />
        </div>
      </div>
    );
  }
}

export default CV;
