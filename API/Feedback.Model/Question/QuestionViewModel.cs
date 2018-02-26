
using System;
using System.ComponentModel.DataAnnotations;

namespace Feedback.ViewModel.Question
{
    public class QuestionViewModel
    {
        public int QuestionId { get; set; }
      
        public string QuestionText { get; set; }

        public bool IsRateField { get; set; }

        public bool IsCommentField { get; set; }
    }
}
