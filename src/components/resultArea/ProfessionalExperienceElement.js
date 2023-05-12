import React, { Component } from 'react';
import '../../styles/resultArea/ProfessionalExperienceElement.css';

class ProfessionalExperienceElement extends Component {
  render() {
    const { professionalExperience } = this.props;
    return (
      <>
        <div className="professional-experience heading">
          PROFESSIONAL EXPERIENCE
        </div>
        <div className="professional-experience divider"></div>
        {professionalExperience.map((experience) => (
          <div className="professional-experience element">
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
  }
}

export default ProfessionalExperienceElement;
