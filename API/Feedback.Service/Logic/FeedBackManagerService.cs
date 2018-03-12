using Feedback.Service.Interfaces;
using Feedback.Common.Enums;
using Feedback.Entity;
using Feedback.ViewModel.User;
using System;
using System.Collections.Generic;
using System.Linq;
using Feedback.Common.CommonData;
using Feedback.Common.Extensions;
using Feedback.Data.Interfaces;
using Feedback.Entity.Models;
using Feedback.ViewModel.FeedBack;
using Feedback.ViewModel.Question;

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

        public IResult GetFeedBackAssignedQuestions(int feedbackId)
        {
            var result = new Result
            {
                Operation = Operation.Read,
                Status = Status.Success
            };
            try
            {
                var feedbackViewModel = new FeedBackViewModel();
                var feeback = _feedbackRepository.GetFeedBackAssignedQuestions(feedbackId);
                if (feeback != null)
                {
                    feedbackViewModel.MapFromModel(feeback);
                    if (feeback.FeedbackQuestions.Any())
                    {
                        var feedbackQtns = feeback.FeedbackQuestions.Select(fq =>
                        {
                            var feedBackQtnViewModel = new FeedbackQuestionViewModel();
                            if (fq.Question != null)
                            {
                                var qtnVm = new QuestionViewModel();
                                feedBackQtnViewModel.Question = (QuestionViewModel)qtnVm.MapFromModel(fq.Question);
                            }
                            return (FeedbackQuestionViewModel)feedBackQtnViewModel.MapFromModel(fq);
                        }).ToList();
                        feedbackViewModel.FeedbackQuestions = feedbackQtns;
                    }
                }
                result.Body = feedbackViewModel.MapFromModel(feeback);
            }
            catch (Exception e)
            {
                result.Message = e.Message;
                result.Status = Status.Error;
            }
            return result;
        }
    }
}
