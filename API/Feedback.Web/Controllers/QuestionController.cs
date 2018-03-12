using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Feedback.Service.Interfaces;
using Feedback.Common.CommonData;
using Feedback.ViewModel;
using Feedback.Common.Enums;

namespace Feedback.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Question/[Action]")]
   // [ValidateModel]
   // [Authorize]
    public class QuestionController : Controller
    {
        private readonly IQuestionManagerService _questionManagerService;
        public QuestionController(IQuestionManagerService questionManagerService)
        {
            _questionManagerService = questionManagerService;
        }

        [HttpGet]
        public IResult GetAllQuestion()
        {
            return _questionManagerService.GetAllQuestion();
        }
    }
}