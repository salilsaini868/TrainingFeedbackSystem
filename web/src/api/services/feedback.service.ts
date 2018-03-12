import { Result } from 'api/model/IResult.model';

export class FeedbackService {
  baseUrl = 'http://localhost:50035/';

  GetFeedBackAssignedQuestions(feedbackId: number): Promise<Result> {
    const methodUrl = this.baseUrl + 'api/FeedBack/GetFeedBackAssignedQuestions?feedbackId=' + feedbackId;
    return fetch(methodUrl)
      .then(result => result.json());
  }
}