import * as React from 'react';
import { FeedbackQuestionModel } from 'api/model/feedback.model';
import { QuestionData } from 'common/question.component';

export interface RatingProp {
  data: FeedbackQuestionModel;
  // tslint:disable-next-line:no-any
  onChildRadioClick: any;
  showErrorMessages: boolean;
}

class Rating extends React.Component<RatingProp> {

  // tslint:disable-next-line:no-any
  handleClick = (event: any) => {
    let value: QuestionData = {
      feedbackQuestionId: this.props.data.feedbackQuestionId,
      rating: +event.target.value
    };
    this.props.onChildRadioClick(value);
  }

  validateRating = () => {
    let data = this.props.data;
    const isError: boolean = Object.keys(data).
      some(x => {
        const fieldValue = data[x];
        if (fieldValue.comment === undefined) {
          return true;
        }
        return false;
      });
    return !isError;
  }

  render() {
    var assignedRating = this.props.data.rating || 0;
    return (
      // tslint:disable-next-line:max-line-length
      <span className={((assignedRating === 0) && this.props.showErrorMessages) === true ? 'star-rating star-5 error' : 'star-rating star-5'}>
        <input
          type="radio"
          name={'rat_' + this.props.data.feedbackQuestionId}
          checked={(assignedRating === 1)}
          defaultValue="1"
          onClick={this.handleClick}
        /><i />
        <input
          type="radio"
          name={'rat_' + this.props.data.feedbackQuestionId}
          checked={(assignedRating === 2)}
          defaultValue="2"
          onClick={this.handleClick}
        /><i />
        <input
          type="radio"
          name={'rat_' + this.props.data.feedbackQuestionId}
          checked={(assignedRating === 3)}
          defaultValue="3"
          onClick={this.handleClick}
        /><i />
        <input
          type="radio"
          name={'rat_' + this.props.data.feedbackQuestionId}
          checked={(assignedRating === 4)}
          defaultValue="4"
          onClick={this.handleClick}
        /><i />
        <input
          type="radio"
          name={'rat_' + this.props.data.feedbackQuestionId}
          checked={(assignedRating === 5)}
          defaultValue="5"
          onClick={this.handleClick}
        />
        <i />
      </span>
    );
  }
}

export default Rating;