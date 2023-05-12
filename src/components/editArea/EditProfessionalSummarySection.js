import React, { Component } from 'react';
import EditProfessionalSummaryElement from './EditProfessionalSummaryElement';

class EditProfessionalSummarySection extends Component {
  render() {
    return (
      <div className="edit-professional-summary container">
        <div className="edit-professional-summary heading">
          Professional summary
        </div>
        <div className="edit-professional-summary prompt">
          Write 2-4 short and energetic sentences to interest the reader.
          Mention your role, experience, and most importantly - your biggest
          achievements, best qualities and skills.
        </div>
        <EditProfessionalSummaryElement />
      </div>
    );
  }
}

export default EditProfessionalSummarySection;
