using Feedback.Data.Interfaces;
using Feedback.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Feedback.Data.Logic
{
    public class FeedbackRepository : Repository<FeedBack>, IFeedbackRepository
    {
        private readonly FeedbackContext _context;
        public FeedbackRepository(FeedbackContext context) : base(context)
        {
            _context = context;
        }

        public FeedBack GetFeedBackAssignedQuestions(int feedbackId)
        {
            var data = _context.Feedbacks.Include(t => t.FeedbackQuestions).ThenInclude(t => t.Question).FirstOrDefault(t => t.FeedbackId == feedbackId && t.IsActive && !t.IsDeleted);
            return data;
        }
    }
}
