import React from 'react';
import EditEmploymentHistoryElement from './EditEmploymentHistoryElement';

const EditEmploymentHistorySection = (props) => {
  const { professionalExperience, handleEmploymentsNumChange } = props;
  const employmentHistoryElements = Array.from(
    { length: professionalExperience.length },
    (_, index) => (
      <EditEmploymentHistoryElement
        key={professionalExperience[index].id}
        id={professionalExperience[index].id}
        index={index}
        {...props}
      />
    )
  );
  return (
    <div className="edit-employment-history container">
      <div className="edit-employment-history heading">Employment history</div>
      <div className="edit-employment-history prompt">
        Show your relevant experience (last 10 years). Use bullet points to note
        your achievements. If possible - use numbers and facts.
      </div>
      {employmentHistoryElements}
      {professionalExperience.length < 3 && (
        <button
          type="button"
          onClick={handleEmploymentsNumChange}
          className="add-button employment"
        >
          + Add employment
        </button>
      )}
    </div>
  );
};

export default EditEmploymentHistorySection;
