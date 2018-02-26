using Microsoft.EntityFrameworkCore;
using Feedback.Entity;
using Feedback.Entity.Models;

namespace Feedback.Data
{
    public class FeedbackContext : DbContext
    {
        public FeedbackContext(DbContextOptions<FeedbackContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public virtual DbSet<FeedBack> Feedbacks { get; set; }
        public virtual DbSet<FeedbackQuestion> FeedbackQuestions { get; set; }
        public virtual DbSet<Question> Questions { get; set; }
        public virtual DbSet<TrainingDetail> TrainingDetails { get; set; }
        public virtual DbSet<TrainingResponse> TrainingResponses { get; set; }
        public virtual DbSet<Users> Users { get; set; }

    }
}
