import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiFileAccount } from '@mdi/js';
import '../../styles/header/Logo.css';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="logo-container">
        <Icon path={mdiFileAccount} size={1.5} color="#d7dadc" />
        <div className="logo-text">
          <span className="bold-logo-text">fresh</span>resume
        </div>
      </div>
    );
  }
}

export default Logo;
