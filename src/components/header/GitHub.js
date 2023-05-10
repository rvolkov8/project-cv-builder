import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import '../../styles/header/GitHub.css';

class GitHub extends Component {
  render() {
    return (
      <div className="github-container">
        <div className="nickname">rvolkov</div>
        <Icon path={mdiGithub} size={1.2} color="#d7dadc" />
      </div>
    );
  }
}

export default GitHub;
