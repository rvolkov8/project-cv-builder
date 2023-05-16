import React from 'react';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import '../../styles/header/GitHub.css';

const GitHub = () => {
  return (
    <div className="github-container">
      <a
        href="https://github.com/rvolkov8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="nickname">rvolkov8</div>
        <Icon
          className="github-icon"
          path={mdiGithub}
          size={1.2}
          color="#d7dadc"
        />
      </a>
    </div>
  );
};

export default GitHub;
