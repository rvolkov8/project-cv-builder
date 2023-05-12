import React, { Component } from 'react';
import EditEducationElement from './EditEducationElement';

class EditEducationSection extends Component {
  render() {
    const { educationsNum } = this.props;
    const educationElements = Array.from(
      { length: educationsNum },
      (_, index) => <EditEducationElement key={index} />
    );
    return (
      <div className="edit-education container">
        <div className="edit-education heading">Education</div>
        <div className="edit-education prompt">
          A varied education on your resume sumps up the value that your
          learning and background will bring to your job.
        </div>
        {educationElements}
        <button className="add-button education">+ Add education</button>
      </div>
    );
  }
}

export default EditEducationSection;
