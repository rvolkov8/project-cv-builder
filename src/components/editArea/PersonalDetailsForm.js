import React, { Component } from 'react';
import '../../styles/editArea/PersonalDetailsForm.css';
import EditEducationSection from './EditEducationSection';
import EditEmploymentHistorySection from './EditEmploymentHistorySection';
import EditProfessionalSummarySection from './EditProfessionalSummarySection';

class PersonalDetailsForm extends Component {
  render() {
    return (
      <>
        <form className="personal-details-form" noValidate>
          <EditProfessionalSummarySection {...this.props} />
          <EditEducationSection {...this.props} />
          <EditEmploymentHistorySection {...this.props} />
        </form>
      </>
    );
  }
}

export default PersonalDetailsForm;
