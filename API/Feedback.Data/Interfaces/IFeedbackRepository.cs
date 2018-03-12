using Feedback.Entity.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Feedback.Data.Interfaces
{
    public interface IFeedbackRepository : IRepository<FeedBack>
    {
        FeedBack GetFeedBackAssignedQuestions(int feedbackId);
    }
}
