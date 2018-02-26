using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Feedback.Entity.Models
{
    public partial class FeedbackQuestion : BaseEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key]
        public int FeedbackQuestionId { get; set; }

        public int FeedbackId { get; set; }

        public int QuestionId { get; set; }

        public Question Question { get; set; }
    }
}
