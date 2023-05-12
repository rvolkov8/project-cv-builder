import React, { Component } from 'react';
import EditEducationElement from './EditEducationElement';

class EditEducationSection extends Component {
  render() {
    const { education, handleEducationsNumChange } = this.props;
    const educationElements = Array.from(
      { length: education.length },
      (_, index) => (
        <EditEducationElement key={index} index={index} {...this.props} />
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
        <button
          type="button"
          onClick={handleEducationsNumChange}
          className="add-button education"
        >
          + Add education
        </button>
      </div>
    );
  }
}

export default EditEducationSection;
