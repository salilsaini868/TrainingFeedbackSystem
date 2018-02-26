import * as React from 'react';
import { Component } from 'react';

class ManageFeedback extends Component {
  render() {
    return (
      <form action="">
        <div className="full-width">
          <label>Training Title</label>
          <input type="text" value="Type here" />
        </div>
        <div className="full-width">
          <label>Training Description</label>
          <input type="text" value="Angular" />
        </div>

        <div className="full-width">
          <ul>
            <li>
              <label>
                <input type="checkbox" />How was the PPT?</label>
            </li>
            <li>
              <label>
                <input type="checkbox" />How was the content</label>
            </li>
            <li>
              <label>
                <input type="checkbox" />How was the PPT?</label>
            </li>
          </ul>
          <ul>
            <li>
              <label>
                <input type="checkbox" />Option One</label>
            </li>
            <li>
              <label>
                <input type="checkbox" />Option Two</label>
            </li>
            <li>
              <label>
                <input type="checkbox" />Option Three</label>
            </li>
          </ul>
        </div>

        <span className="pull-right">
          <button type="submit" value="Save" className="btn">Save</button>
        </span>
      </form>
    );
  }
}

export default ManageFeedback;