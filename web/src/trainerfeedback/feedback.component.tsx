import * as React from 'react';
import { Component } from 'react';

// component
import QuestionComponent, { QuestionData } from '../common/question.component';

// models
import { TrainingFeedback } from 'api/model/training.feedback';
import { FeedBackModel, FeedbackQuestionModel } from 'api/model/feedback.model';

// Service
import { FeedbackService } from 'api/services/feedback.service';
import { translate } from 'react-i18next';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

export interface TrainingFeedbackState {
  training: TrainingFeedback;
  feedbackQuestions: FeedbackQuestionModel[];
  showValidationMessage: boolean;
}

// tslint:disable-next-line:no-any
class FeedbackForm extends Component<{ t: any, i18n: any }, TrainingFeedbackState> {
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
      <form onSubmit={this.handleSubmit} noValidate={false} autoComplete="off">
        <div className="full-width half-width">
          <TextField
            required={true}
            // error={((pageData.TraineeName === '') && this.state.showValidationMessage)}
            id={this.props.t('feedback.name')}
            floatingLabelText={this.props.t('feedback.name')}
            defaultValue={pageData.TraineeName}
          />
        </div>
        <div className="full-width half-width right-gap">
          <TextField
            required={true}
            id={this.props.t('feedback.id')}
            floatingLabelText={this.props.t('feedback.id')}
            defaultValue={pageData.TraineeEmpId}
          // error={((pageData.TraineeEmpId === '') && this.state.showValidationMessage)}
          />
        </div>
        <div className="full-width half-width">
          <TextField
            required={true}
            id={this.props.t('feedback.dept')}
            floatingLabelText={this.props.t('feedback.dept')}
            defaultValue={pageData.TraineeDept}
          // error={((pageData.TraineeDept === '') && this.state.showValidationMessage)}
          />
        </div>
        <div className="full-width half-width right-gap">
          <TextField
            required={true}
            id={this.props.t('feedback.trainerName')}
            floatingLabelText={this.props.t('feedback.trainerName')}
            defaultValue={pageData.TrainerName}
          // error={((pageData.TrainerName === '') && this.state.showValidationMessage)}
          />
        </div>
        <div className="full-width bottom-gap">
          <TextField
            required={true}
            id={this.props.t('feedback.topic')}
            floatingLabelText={this.props.t('feedback.topic')}
            defaultValue={pageData.TrainingTopic}
          // error={((pageData.TrainingTopic === '') && this.state.showValidationMessage)}
          />
        </div>
        {this.state.feedbackQuestions.length > 0 &&
          < QuestionComponent
            ref={instance => { this.child = instance; }}
            data={this.state.feedbackQuestions}
            onChildTextBlur={this.onChildTextChanged}
            showErrorMessages={this.state.showValidationMessage}
            onRatingChange={this.onRatingChange}
            t={this.props.t}
            i18n={this.props.i18n}
          />
        }
        <span className="pull-right">
          <Button type="submit" variant="raised" color="primary" size="large">{this.props.t('common.save')} </Button>
          &nbsp;
          <Button variant="raised" color="secondary" size="large"> {this.props.t('common.close')} </Button>
          {/* <button type="submit" value="Save" className="btn">{this.props.t('common.save')}</button> 
          <button type="submit" value="Save" className="btn">{this.props.t('common.close')}</button>*/}
        </span>
      </form>
    );
  }
}

export default translate('translations')(FeedbackForm);
