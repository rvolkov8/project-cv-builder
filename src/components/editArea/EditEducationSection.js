import React from 'react';
import EditEducationElement from './EditEducationElement';

const EditEducationSection = (props) => {
  const { education, handleEducationsNumChange } = props;
  const educationElements = Array.from(
    { length: education.length },
    (_, index) => (
      <EditEducationElement
        key={education[index].id}
        id={education[index].id}
        index={index}
        {...props}
      />
    )
  );

  return (
    <div className="edit-education container">
      <div className="edit-education heading">Education</div>
      <div className="edit-education prompt">
        A varied education on your resume sums up the value that your learning
        and background will bring to your job.
      </div>
      {educationElements}
      {education.length < 3 && (
        <button
          type="button"
          onClick={handleEducationsNumChange}
          className="add-button education"
        >
          + Add education
        </button>
      )}
    </div>
  );
};

export default EditEducationSection;
