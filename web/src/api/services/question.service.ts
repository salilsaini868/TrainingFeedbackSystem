export class QuestionService {
  baseUrl = 'http://localhost:50035/';

  fetchQuestions(): Promise<Response> {
    const methodUrl = this.baseUrl + 'api/Question/GetAllQuestion';
    return fetch(methodUrl)
      .then(result => result.json());
  }
 
}