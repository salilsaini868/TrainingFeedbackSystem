using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Feedback.Entity.Models
{
    public partial class TrainingDetail : BaseEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key]
        public int TrainingDetailId { get; set; }

        [Required,MaxLength(100)]
        public string TrainingTopic { get; set; }

        [Required, MaxLength(100)]
        public string TrainerName { get; set; }

        [Required, MaxLength(100)]
        public string TraineeName { get; set; }

        [Required, MaxLength(100)]
        public string TraineeEmpId { get; set; }

        [Required, MaxLength(100)]
        public string TraineeDept { get; set; }

        public ICollection<TrainingResponse> TrainingResponses { get; set; }
    }
}
