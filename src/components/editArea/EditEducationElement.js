import React from 'react';

const EditEducationElement = (props) => {
  const {
    currentStep,
    education,
    index,
    id,
    handleEducationInstitutionChange,
    handleEducationDegreeChange,
    handleEducationStartDataChange,
    handleEducationEndDataChange,
    handleEducationLocationChange,
    handleEducationDescriptionChange,
    deleteEducationElement,
  } = props;
  return (
    <>
      <div className="edit-education-element divider"></div>
      <div className="edit-education-element container">
        <button
          type="button"
          onClick={() => {
            deleteEducationElement(id);
          }}
          className="delete-element-button"
        >
          delete
        </button>
        <div className="institution-field container">
          <label htmlFor="institution-input">Institution</label>
          <input
            {...(currentStep.isReturned && {
              value: education[index].institution,
            })}
            onChange={(e) => {
              handleEducationInstitutionChange(e, index);
            }}
            type="text"
            id="institution-input"
            maxLength={50}
          />
        </div>
        <div className="degree-field container">
          <label htmlFor="degree-input">Degree</label>
          <input
            {...(currentStep.isReturned && {
              value: education[index].degree,
            })}
            onChange={(e) => {
              handleEducationDegreeChange(e, index);
            }}
            type="text"
            id="degree-input"
            maxLength={50}
          />
        </div>
        <div className="dates-field container">
          <div className="start-date-field-container">
            <label htmlFor="start-date-input">Start date</label>
            <input
              {...(currentStep.isReturned && {
                value: education[index].startDate,
              })}
              onChange={(e) => {
                handleEducationStartDataChange(e, index);
              }}
              type="text"
              id="start-date-input"
              maxLength={18}
            />
          </div>
          <div className="end-date-field container">
            <label htmlFor="end-date-input">End date</label>
            <input
              {...(currentStep.isReturned && {
                value: education[index].endDate,
              })}
              onChange={(e) => {
                handleEducationEndDataChange(e, index);
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
            {...(currentStep.isReturned && {
              value: education[index].location,
            })}
            onChange={(e) => {
              handleEducationLocationChange(e, index);
            }}
            type="text"
            id="location-input"
            maxLength={50}
          />
        </div>
        <div className="description-field container">
          <label htmlFor="description-input">Description</label>
          <textarea
            {...(currentStep.isReturned && {
              value: education[index].description,
            })}
            onChange={(e) => {
              handleEducationDescriptionChange(e, index);
            }}
            id="description-input"
            maxLength={200}
            cols="30"
            rows="10"
            placeholder="e.g. Graduated with High Honors"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default EditEducationElement;
