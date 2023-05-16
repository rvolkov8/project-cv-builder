import React from 'react';
import '../../styles/resultArea/ProfessionalExperienceElement.css';

const ProfessionalExperienceElement = (props) => {
  const { professionalExperience } = props;

  return (
    <>
      <div className="professional-experience heading">
        PROFESSIONAL EXPERIENCE
      </div>
      <div className="professional-experience divider"></div>
      {professionalExperience.map((experience) => (
        <div className="professional-experience element" key={experience.id}>
          <div className="professional-experience dates">
            {experience.startDate} - {experience.endDate}
          </div>
          <div className="professional-experience company location">
            {experience.company} | {experience.location}
          </div>
          <div className="professional-experience position">
            {experience.jobTitle.toUpperCase()}
          </div>
          {experience.description !== '' && (
            <div className="professional-experience description">
              {experience.description}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ProfessionalExperienceElement;
