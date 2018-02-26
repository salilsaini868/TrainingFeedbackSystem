import * as React from 'react';
import { Component } from 'react';
import Rating from '../common/rating.component';

class Question extends Component {
  render() {
    return (
      <div className="full-width">
        <ul className="three-col">
          <li>
            <label>
              How was the PPT?</label>
          </li>
        </ul>
        <div className="three-col">
          <Rating key="1" />
        </div>
        <div className="three-col">
          <div className="full-width"><textarea value="Comments" key="11" /></div>
        </div>
      </div>
    );
  }
}

export default Question;