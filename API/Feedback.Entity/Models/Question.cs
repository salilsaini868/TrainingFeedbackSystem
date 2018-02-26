using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Feedback.Entity.Models
{
    public partial class Question : BaseEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key]
        public int QuestionId { get; set; }

        [Required, MaxLength(1000)]
        public string QuestionText { get; set; }

        public bool IsRateField { get; set; }

        public bool IsCommentField { get; set; }
    }
}
