import React, { Component } from 'react';
import '../../styles/resultArea/ResultArea.css';
import CV from './CV';

class ResultArea extends Component {
  render() {
    const { personInfo } = this.props;
    return (
      <div className="result-area-container">
        <CV personInfo={personInfo} />
      </div>
    );
  }
}

export default ResultArea;
