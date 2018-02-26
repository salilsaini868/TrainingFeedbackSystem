import * as React from 'react';
import { Component } from 'react';

// component
import Question from '../common/question.component';

// models
import { TrainingFeedback } from '../api/model/training.feedback';
import { TrainingQuestion } from '../api/model/training.question';

export interface TrainingFeedbackState {
  training: TrainingFeedback;
}

// tslint:disable-next-line:no-any
class FeedbackForm extends Component<any, TrainingFeedbackState> {
  // variables
  questions: TrainingQuestion[] = [];

  // tslint:disable-next-line:no-any
  constructor(props: any) {
    super(props);
    this.state = {
      training: { TraineeDept: '', TraineeEmpId: '', TraineeName: '', TrainerName: '', TrainingTopic: '' }
    };
  }

  componentDidMount() {
    this.questions = [];
  }

  render() {
    let pageData = this.state.training;
    return (
      <form action="">
        <div className="full-width half-width">
          <label>Employee Name</label>
          <input type="text" value={pageData.TraineeName} />
        </div>
        <div className="full-width half-width right-gap">
          <label>Employee ID</label>
          <input type="text" value={pageData.TraineeEmpId} />
        </div>
        <div className="full-width half-width">
          <label>Employee Department</label>
          <input type="text" value={pageData.TraineeDept} />
        </div>
        <div className="full-width half-width right-gap">
          <label>Trainer Name</label>
          <input type="text" value={pageData.TrainerName} />
        </div>
        <div className="full-width">
          <label>Training Topic</label>
          <input type="text" value={pageData.TrainingTopic} />
        </div>

        <Question />

        {/*<div className="full-width">
          <ul className="smily-nav">
            <li>
              <a href="javascript:void(0)">
                <img src="images/average.png" title="Average" alt="Average" />
                <label>Average</label>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="images/good.png" title="Good" alt="Good" />
                <label>Good</label>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="images/excellent.png" title="Excellent" alt="Excellent" />
                <label>Excellent</label>
              </a>
            </li>
          </ul>
        </div> */}
        <span className="pull-right">
          <button type="submit" value="Save" className="btn">Save</button>
          <button type="submit" value="Save" className="btn">Close</button>
        </span>
      </form>
    );
  }
}

export default FeedbackForm;