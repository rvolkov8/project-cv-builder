import React, { Component } from 'react';
import '../../styles/editArea/MainInfoForm.css';

class MainInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-info-form-container">
        <form novalidate>
          <div className="job-title">
            <label htmlFor="job-title">Desired Job Title</label>
            <input type="text" id="job-title" />
          </div>
          <div className="picture">
            <label htmlFor="picture">Picture</label>
            <input type="file" id="picture" />
          </div>
          <div className="first-name">
            <label htmlFor="first-name">First name</label>
            <input type="text" id="first-name" />
          </div>
          <div className="last-name">
            <label htmlFor="last-name">Last name</label>
            <input type="text" id="last-name" />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="phone-number">
            <label htmlFor="tel">Phone number</label>
            <input type="tel" id="tel" />
          </div>
        </form>
      </div>
    );
  }
}

export default MainInfoForm;
