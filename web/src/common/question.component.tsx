import * as React from 'react';

// component
import Rating from 'common/rating.component';

// models
import { FeedbackQuestionModel } from 'api/model/feedback.model';
// import { translate } from 'react-i18next';

export interface QuestionProps {
  data: FeedbackQuestionModel[];
  // tslint:disable-next-line:no-any
  onChildTextBlur: any;
  // tslint:disable-next-line:no-any
  onRatingChange: any;
  showErrorMessages: boolean;
  // tslint:disable-next-line:no-any
  t: any;
  // tslint:disable-next-line:no-any
  i18n: any;
}

// for sending data to parent
export interface QuestionData {
  rating?: number;
  comment?: string;
  feedbackQuestionId: number;
}

class QuestionComponent extends React.Component<QuestionProps> {
  // tslint:disable-next-line:no-any
  child: any;
  constructor(props: QuestionProps) {
    super(props);
  }

  // tslint:disable-next-line:no-any
  handleBlur = (item: FeedbackQuestionModel, event: any) => {
    if (event.target.value !== '') {
      let value: QuestionData = {
        feedbackQuestionId: item.feedbackQuestionId,
        comment: event.target.value
      };
      this.props.onChildTextBlur(value);
    }
  }

  handleRating = (item: QuestionData) => {
    this.props.onRatingChange(item);
  }

  // to validate the child component from parent component
  validateCommentRating = () => {
    let isRatingValid = this.child.validateRating();
    let isCommentValid = this.validateComment();

    if (isRatingValid && isCommentValid) {
      return true;
    } else {
      return false;
    }
  }

  validateComment = () => {
    let data = this.props.data;
    const isError: boolean = Object.keys(data).
      some(x => {
        const fieldValue = data[x];
        if (fieldValue.comment === '' || fieldValue.comment === undefined) {
          return true;
        }
        return false;
      });
    return !isError;
  }

  render() {
    let me = this;
    let dataQtns = this.props.data;
    var qtnHtml = dataQtns.map(function (item: FeedbackQuestionModel, i: number) {
      return (
        <div className="full-width" key={'qtndiv_' + item.feedbackQuestionId}>
          <ul className="three-col">
            <li>
              <label>{item.question.questionText}</label>
            </li>
          </ul>
          <div className="three-col">
            <Rating
              ref={instance => { me.child = instance; }}
              data={item}
              onChildRadioClick={me.handleRating}
              showErrorMessages={me.props.showErrorMessages}
            />
          </div>
          <div className="three-col">
            <div className="full-width">
              <textarea
                placeholder={me.props.t('question.comment')}
                // tslint:disable-next-line:max-line-length
                className={((item.comment === undefined || item.comment === '') && me.props.showErrorMessages) === true ? 'error' : ''}
                name="comments"
                defaultValue={item.comment || ''}
                onBlur={me.handleBlur.bind(me, item)}
              />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>{qtnHtml}</div>
    );
  }
}

export default QuestionComponent;
