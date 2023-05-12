import React, { Component } from 'react';
import EditEmploymentHistoryElement from './EditEmploymentHistoryElement';

class EditEmploymentHistorySection extends Component {
  render() {
    const { professionalExperience, handleEmploymentsNumChange } = this.props;
    const employmentHistoryElements = Array.from(
      { length: professionalExperience.length },
      (_, index) => (
        <EditEmploymentHistoryElement
          key={index}
          index={index}
          {...this.props}
        />
      )
    );
    return (
      <div className="edit-employment-history container">
        <div className="edit-employment-history heading">
          Employment history
        </div>
        <div className="edit-employment-history prompt">
          Show yor relevant experience (last 10 years). Use bullet points to
          note your achievements. If possible - use numbers and facts.
        </div>
        {employmentHistoryElements}
        <button
          type="button"
          onClick={handleEmploymentsNumChange}
          className="add-button employment"
        >
          + Add employment
        </button>
      </div>
    );
  }
}

export default EditEmploymentHistorySection;
