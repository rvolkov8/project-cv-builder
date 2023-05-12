import React, { Component } from 'react';

class EditEducationElement extends Component {
  render() {
    const {
      index,
      handleEducationInstitutionChange,
      handleEducationDegreeChange,
      handleEducationStartDataChange,
      handleEducationEndDataChange,
      handleEducationLocationChange,
      handleEducationDescriptionChange,
    } = this.props;
    return (
      <>
        <div className="edit-education-element divider"></div>
        <div className="edit-education-element container">
          <div className="institution-field container">
            <label htmlFor="institution-input">Institution</label>
            <input
              onChange={(e) => {
                handleEducationInstitutionChange(e, index);
              }}
              type="text"
              id="institution-input"
            />
          </div>
          <div className="degree-field container">
            <label htmlFor="degree-input">Degree</label>
            <input
              onChange={(e) => {
                handleEducationDegreeChange(e, index);
              }}
              type="text"
              id="degree-input"
            />
          </div>
          <div className="dates-field container">
            <div className="start-date-field-container">
              <label htmlFor="start-date-input">Start date</label>
              <input
                onChange={(e) => {
                  handleEducationStartDataChange(e, index);
                }}
                type="text"
                id="start-date-input"
              />
            </div>
            <div className="end-date-field container">
              <label htmlFor="end-date-input">End date</label>
              <input
                onChange={(e) => {
                  handleEducationEndDataChange(e, index);
                }}
                type="text"
                id="end-date-input"
              />
            </div>
          </div>
          <div className="location-field container">
            <label htmlFor="location-input">Location</label>
            <input
              onChange={(e) => {
                handleEducationLocationChange(e, index);
              }}
              type="text"
              id="location-input"
            />
          </div>
          <div className="description-field container">
            <label htmlFor="description-input">Description</label>
            <textarea
              onChange={(e) => {
                handleEducationDescriptionChange(e, index);
              }}
              id="description-input"
              maxLength={1000}
              cols="30"
              rows="10"
              placeholder="e.g. Graduated with High Honors"
            ></textarea>
          </div>
        </div>
      </>
    );
  }
}

export default EditEducationElement;
