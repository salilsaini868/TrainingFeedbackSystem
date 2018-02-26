using Feedback.Data.Interfaces;
using Feedback.Entity.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Feedback.Data.Logic
{
    public class QuestionRepository : Repository<Question>, IQuestionRepository
    {
        private readonly FeedbackContext _context;
        public QuestionRepository(FeedbackContext context) : base(context) {

            this._context = context;
        }
    }
}
