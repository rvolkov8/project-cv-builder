import React, { Component } from 'react';
import '../../styles/resultArea/ResultArea.css';
import CV from './CV';

class ResultArea extends Component {
  render() {
    return (
      <div className="result-area-container">
        <CV {...this.props} />
      </div>
    );
  }
}

export default ResultArea;
