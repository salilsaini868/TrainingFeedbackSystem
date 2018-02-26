using System;
using System.Collections.Generic;
using System.Text;
using Feedback.Common.CommonData;

namespace Feedback.Service.Interfaces
{
    public interface IQuestionManagerService
    {
        IResult GetAllQuestion();
    }
}
