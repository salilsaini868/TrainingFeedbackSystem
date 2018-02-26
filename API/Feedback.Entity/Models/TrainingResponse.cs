using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Feedback.Entity.Models
{
    public partial class TrainingResponse : BaseEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key]
        public int TrainingResponseId { get; set; }

        public int FeedbackQuestionId { get; set; }

        public int TrainingDetailId { get; set; }

        public decimal Rating { get; set; }

        [MaxLength(500)]
        public string Comments { get; set; }
        
    }
}
