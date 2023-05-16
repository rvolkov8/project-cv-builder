import React from 'react';
import Icon from '@mdi/react';
import { mdiFileAccount } from '@mdi/js';
import '../../styles/header/Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <Icon path={mdiFileAccount} size={1.5} color="#d7dadc" />
      <div className="logo-text">
        <span className="bold-logo-text">fresh</span>resume
      </div>
    </div>
  );
};

export default Logo;
