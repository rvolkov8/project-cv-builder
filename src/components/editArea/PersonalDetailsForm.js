import React from 'react';
import '../../styles/editArea/PersonalDetailsForm.css';
import EditEducationSection from './EditEducationSection';
import EditEmploymentHistorySection from './EditEmploymentHistorySection';
import EditProfessionalSummarySection from './EditProfessionalSummarySection';

const PersonalDetailsForm = (props) => {
  return (
    <>
      <form className="personal-details-form" noValidate>
        <EditProfessionalSummarySection {...props} />
        <EditEducationSection {...props} />
        <EditEmploymentHistorySection {...props} />
      </form>
    </>
  );
};

export default PersonalDetailsForm;
