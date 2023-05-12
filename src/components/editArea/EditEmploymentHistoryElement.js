import React, { Component } from 'react';

class EditEmploymentHistoryElement extends Component {
  render() {
    const {
      index,
      handleEmploymentJobTitleChange,
      handleEmploymentCompanyChange,
      handleEmploymentStartDateChange,
      handleEmploymentEndDateChange,
      handleEmploymentLocationChange,
      handleEmploymentDescriptionChange,
    } = this.props;
    return (
      <>
        <div className="edit-employment-history-element divider"></div>
        <div className="edit-employment-history-element container">
          <div className="job-title-field container">
            <label htmlFor="job-title-input">Job title</label>
            <input
              onChange={(e) => {
                handleEmploymentJobTitleChange(e, index);
              }}
              type="text"
              id="job-title-input"
              maxLength={100}
            />
          </div>
          <div className="company-field container">
            <label htmlFor="company-input">Company</label>
            <input
              onChange={(e) => {
                handleEmploymentCompanyChange(e, index);
              }}
              type="text"
              id="company-input"
              maxLength={50}
            />
          </div>
          <div className="dates-field container">
            <div className="start-date-field-container">
              <label htmlFor="start-date-input">Start date</label>
              <input
                onChange={(e) => {
                  handleEmploymentStartDateChange(e, index);
                }}
                type="text"
                id="start-date-input"
                maxLength={18}
              />
            </div>
            <div className="end-date-field container">
              <label htmlFor="end-date-input">End date</label>
              <input
                onChange={(e) => {
                  handleEmploymentEndDateChange(e, index);
                }}
                type="text"
                id="end-date-input"
                maxLength={18}
              />
            </div>
          </div>
          <div className="location-field container">
            <label htmlFor="location-input">Location</label>
            <input
              onChange={(e) => {
                handleEmploymentLocationChange(e, index);
              }}
              type="text"
              id="location-input"
              maxLength={50}
            />
          </div>
          <div className="description-field container">
            <label htmlFor="description-input">Description</label>
            <textarea
              onChange={(e) => {
                handleEmploymentDescriptionChange(e, index);
              }}
              id="description-input"
              maxLength={850}
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
