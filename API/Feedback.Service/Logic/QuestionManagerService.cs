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
using Feedback.ViewModel.Question;

namespace Feedback.Service.Logic
{
    public class QuestionManagerService : IQuestionManagerService
    {
        #region Global Variables
        private readonly IQuestionRepository _questionRepository;
        #endregion
        public QuestionManagerService(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }

        public IResult GetAllQuestion()
        {
            var result = new Result
            {
                Operation = Operation.Read,
                Status = Status.Success
            };
            try
            {
                var skills = new List<QuestionViewModel>();
                var allSkills = _questionRepository.GetAll().ToList();
                result.Body = skills.MapFromModel<Question, QuestionViewModel>(allSkills);
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
