import * as React from 'react';
import { Component } from 'react';

// component
import QuestionComponent, { QuestionData } from '../common/question.component';

// models
import { TrainingFeedback } from 'api/model/training.feedback';
import { FeedBackModel, FeedbackQuestionModel } from 'api/model/feedback.model';

// Service
import { FeedbackService } from 'api/services/feedback.service';

export interface TrainingFeedbackState {
  training: TrainingFeedback;
  feedbackQuestions: FeedbackQuestionModel[];
  showValidationMessage: boolean;
}

// tslint:disable-next-line:no-any
class FeedbackForm extends Component<any, TrainingFeedbackState> {
  // tslint:disable-next-line:no-any
  child: any;
  // variables
  feedbackService = new FeedbackService();
  feedback: FeedBackModel;

  // tslint:disable-next-line:no-any
  constructor(props: any) {
    super(props);
    this.state = {
      training: { TraineeDept: '', TraineeEmpId: '', TraineeName: '', TrainerName: '', TrainingTopic: '' },
      feedbackQuestions: [],
      showValidationMessage: false
    };
  }

  onChildTextChanged = (value: QuestionData) => {
    let qtns = this.state.feedbackQuestions;
    if (value) {
      let dataToUpdate = qtns.find(t => t.feedbackQuestionId === value.feedbackQuestionId);
      if (dataToUpdate) {
        dataToUpdate.comment = value.comment;
      }
    }
    this.setState({
      feedbackQuestions: qtns,
    });
  }

  onRatingChange = (value: QuestionData) => {
    let qtns = this.state.feedbackQuestions;
    if (value) {
      let dataToUpdate = qtns.find(t => t.feedbackQuestionId === value.feedbackQuestionId);
      if (dataToUpdate) {
        dataToUpdate.rating = value.rating;
      }
    }
    this.setState({
      feedbackQuestions: qtns,
    });
  }

  // tslint:disable-next-line:no-any
  handleSubmit = (event: any) => {
    let isValid = this.validatePage();
    if (isValid) {
      // Handle valid state, e.g., advance wizard
    } else {
      // Handle invalid state, e.g., don't advance wizard
    }
    this.setState({ showValidationMessage: !isValid });
    event.preventDefault();
    return;
  }

  validatePage = () => {
    let isChildValidated = this.child.validateCommentRating();
    let isPageControlValid = this.validatePageControls();
    if (isChildValidated && isPageControlValid) {
      return true;
    }
    return false;
  }

  validatePageControls = () => {
    let pageData = this.state.training;
    // tslint:disable-next-line:max-line-length
    if (pageData.TraineeDept === '' || pageData.TraineeEmpId === '' || pageData.TraineeName === '' || pageData.TrainerName === '' || pageData.TrainingTopic === '') {
      return false;
    }
    return true;
  }

  componentDidMount() {
    this.feedbackService.GetFeedBackAssignedQuestions(1).then(data => {
      if (data) {
        this.feedback = data.body;
        this.setState({ feedbackQuestions: this.feedback.feedbackQuestions });
      }
    });
  }

  render() {
    let pageData = this.state.training;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="full-width half-width">
          <label>Employee Name</label>
          <input
            type="text"
            value={pageData.TraineeName}
            className={((pageData.TraineeName === '') && this.state.showValidationMessage) === true ? 'error' : ''}
          />
        </div>
        <div className="full-width half-width right-gap">
          <label>Employee ID</label>
          <input
            type="text"
            value={pageData.TraineeEmpId}
            className={((pageData.TraineeEmpId === '') && this.state.showValidationMessage) === true ? 'error' : ''}
          />
        </div>
        <div className="full-width half-width">
          <label>Employee Department</label>
          <input
            type="text"
            value={pageData.TraineeDept}
            className={((pageData.TraineeDept === '') && this.state.showValidationMessage) === true ? 'error' : ''}
          />
        </div>
        <div className="full-width half-width right-gap">
          <label>Trainer Name</label>
          <input
            type="text"
            value={pageData.TrainerName}
            className={((pageData.TrainerName === '') && this.state.showValidationMessage) === true ? 'error' : ''}
          />
        </div>
        <div className="full-width">
          <label>Training Topic</label>
          <input
            type="text"
            value={pageData.TrainingTopic}
            className={((pageData.TrainingTopic === '') && this.state.showValidationMessage) === true ? 'error' : ''}
          />
        </div>
        {this.state.feedbackQuestions.length > 0 &&
          < QuestionComponent
            ref={instance => { this.child = instance; }}
            data={this.state.feedbackQuestions}
            onChildTextBlur={this.onChildTextChanged}
            showErrorMessages={this.state.showValidationMessage}
            onRatingChange={this.onRatingChange}
          />
        }
        <span className="pull-right">
          <button type="submit" value="Save" className="btn">Save</button>
          <button type="submit" value="Save" className="btn">Close</button>
        </span>
      </form>
    );
  }
}

export default FeedbackForm;