using Feedback.Service.Interfaces;
using Feedback.Common.Enums;
using Feedback.Entity;
using Feedback.ViewModel.User;
using System;
using Feedback.Data.Interfaces;

namespace Feedback.Service.Logic
{
    public class FeedBackManagerService : IFeedBackManagerService
    {
        #region Global Variables
        private readonly IFeedbackRepository _feedbackRepository;
        #endregion
        public FeedBackManagerService(IFeedbackRepository feedbackRepository)
        {
            _feedbackRepository = feedbackRepository;
        }


    }
}
