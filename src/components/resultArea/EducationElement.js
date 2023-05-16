import React from 'react';
import '../../styles/resultArea/EducationElement.css';

const EducationElement = (props) => {
  const { education } = props;
  return (
    <>
      {education.map((ed) => (
        <div className="education-element" key={ed.id}>
          <div className="education-dates">
            {ed.startDate} - {ed.endDate}
          </div>
          <div className="education-degree">{ed.degree.toUpperCase()}</div>
          <div className="education-institution">{ed.institution}</div>
          <div className="education-location">{ed.location}</div>
          {ed.description !== '' && (
            <div className="education-description">{ed.description}</div>
          )}
        </div>
      ))}
    </>
  );
};

export default EducationElement;
