import React from 'react';
import '../../styles/resultArea/ResultArea.css';
import CV from './CV';

const ResultArea = (props) => {
  return (
    <div className="result-area-container">
      <CV {...props} />
    </div>
  );
};

export default ResultArea;
