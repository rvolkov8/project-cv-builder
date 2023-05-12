import React, { Component } from 'react';
import '../../styles/editArea/PersonalDetailsForm.css';
import EditEducationSection from './EditEducationSection';
import EditEmploymentHistorySection from './EditEmploymentHistorySection';
import EditProfessionalSummarySection from './EditProfessionalSummarySection';

class PersonalDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationsNum: 1,
      professionalExperiencesNum: 1,
    };
  }

  render() {
    const { educationsNum, professionalExperiencesNum } = this.state;
    return (
      <>
        <form className="personal-details-form" novalidate>
          <EditProfessionalSummarySection />
          <EditEducationSection educationsNum={educationsNum} />
          <EditEmploymentHistorySection
            professionalExperiencesNum={professionalExperiencesNum}
          />
        </form>
      </>
    );
  }
}

export default PersonalDetailsForm;
