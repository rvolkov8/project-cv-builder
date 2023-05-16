import React from 'react';

const EditProfessionalSummaryElement = (props) => {
  const { currentStep, personInfo, handlePersonalStatementChange } = props;
  return (
    <>
      <div className="edit-professional-summary divider"></div>
      <div className="professional-summary-field container">
        <label htmlFor="professional-summary-input">Description</label>
        <textarea
          {...(currentStep.isReturned && {
            value: personInfo.personalStatement,
          })}
          onChange={handlePersonalStatementChange}
          id="professional-summary-input"
          maxLength={400}
          cols="30"
          rows="10"
          placeholder="e.g. Passionate science teacher with 8+ years of experience and a track record of ..."
        ></textarea>
      </div>
    </>
  );
};

export default EditProfessionalSummaryElement;
