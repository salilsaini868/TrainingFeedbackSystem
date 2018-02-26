using Feedback.Data.Interfaces;
using Feedback.Entity.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Feedback.Data.Logic
{
    public class FeedbackRepository : Repository<FeedBack>, IFeedbackRepository
    {
        private readonly FeedbackContext _context;
        public FeedbackRepository(FeedbackContext context) : base(context)
        {

            this._context = context;
        }
    }
}
