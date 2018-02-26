using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Feedback.Entity.Models
{
    public partial class FeedBack : BaseEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key]
        public int FeedbackId { get; set; }

        [Required, MaxLength(500)]
        public string FeedbackTitle { get; set; }

        [MaxLength(500)]
        public string FeedbackDescription { get; set; }

        public ICollection<FeedbackQuestion> FeedbackQuestions { get; set; }
    }
}
