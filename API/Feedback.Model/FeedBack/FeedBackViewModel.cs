using System;
using System.Collections.Generic;
using System.Text;

namespace Feedback.ViewModel.FeedBack
{
    public class FeedBackViewModel
    {
        public int FeedbackId { get; set; }

        public string FeedbackTitle { get; set; }

        public string FeedbackDescription { get; set; }

        public List<FeedbackQuestionViewModel> FeedbackQuestions { get; set; }
    }

    public class FeedbackQuestionViewModel
    {
        public int FeedbackQuestionId { get; set; }

        public int FeedbackId { get; set; }

        public int QuestionId { get; set; }
    }
}
