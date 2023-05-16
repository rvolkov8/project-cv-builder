import React from 'react';
import '../../styles/header/Header.css';

import Logo from './Logo';
import Step from './Step';
import GitHub from './GitHub';

const Header = (props) => {
  const { currentStep } = props;
  return (
    <div className="header-container">
      <div className="left-part">
        <Logo />
        <div className="header-divider"></div>
        <Step currentStep={currentStep} />
      </div>
      <div className="right-part">
        <GitHub />
      </div>
    </div>
  );
};

export default Header;
