import React, { Component } from 'react';

class EditEmploymentHistoryElement extends Component {
  render() {
    return (
      <>
        <div className="edit-employment-history-element divider"></div>
        <div className="edit-employment-history-element container">
          <div className="job-title-field container">
            <label htmlFor="job-title-input">Job title</label>
            <input type="text" id="job-title-input" />
          </div>
          <div className="company-field container">
            <label htmlFor="company-input">Company</label>
            <input type="text" id="company-input" />
          </div>
          <div className="dates-field container">
            <div className="start-date-field-container">
              <label htmlFor="start-date-input">Start date</label>
              <input type="text" id="start-date-input" />
            </div>
            <div className="end-date-field container">
              <label htmlFor="end-date-input">End date</label>
              <input type="text" id="end-date-input" />
            </div>
          </div>
          <div className="location-field container">
            <label htmlFor="location-input">Location</label>
            <input type="text" id="location-input" />
          </div>
          <div className="description-field container">
            <label htmlFor="description-input">Description</label>
            <textarea
              id="description-input"
              maxLength={1000}
              cols="30"
              rows="10"
              placeholder="e.g. Created and implemented lesson plans based on child-led interests and curiosities."
            ></textarea>
          </div>
        </div>
      </>
    );
  }
}

export default EditEmploymentHistoryElement;
