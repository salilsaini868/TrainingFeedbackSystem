using Microsoft.AspNetCore.Mvc;
using Feedback.Common.CommonData;
using Feedback.Common.Enums;
using Feedback.ViewModel;
using Feedback.Service.Interfaces;
using System;
using System.Net;
using System.Net.Http;
using Microsoft.AspNetCore.Authorization;

namespace Feedback.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/FeedBack/[Action]")]
   // [ValidateModel]
   // [Authorize]
    public class FeedBackController : Controller
    {
        private readonly IFeedBackManagerService _feedBackManager;

        public FeedBackController(IFeedBackManagerService feedBackManager)
        {
            _feedBackManager = feedBackManager;
        }

        [HttpGet]
        public IResult GetFeedBackAssignedQuestions(int feedbackId)
        {
            var data = _feedBackManager.GetFeedBackAssignedQuestions(feedbackId);
            return data;
        }
    }
}