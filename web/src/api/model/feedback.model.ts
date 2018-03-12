export interface FeedBackModel {
  feedbackId: number;
  feedbackTitle: string;
  feedbackDescription: string;
  feedbackQuestions: FeedbackQuestionModel[];
}

export interface FeedbackQuestionModel {
  feedbackQuestionId: number;
  feedbackId: number;
  questionId: number;
  question: QuestionModel;

  comment?: string;
  rating?: number;
}

export interface QuestionModel {
  questionId: number;
  questionText: string;
  isRateField: boolean;
  isCommentField: boolean;
}