using System;
using System.Collections.Generic;
using System.Text;
using Feedback.Common.CommonData;

namespace Feedback.Service.Interfaces
{
    public interface IFeedBackManagerService
    {
        IResult GetFeedBackAssignedQuestions(int feedbackId);
    }
}
