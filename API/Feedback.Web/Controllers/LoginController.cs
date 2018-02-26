using Microsoft.AspNetCore.Mvc;
using Feedback.Common.CommonData;
using Feedback.Common.Enums;
using Feedback.ViewModel.User;
using System;
using System.Net;
using System.Net.Http;
using Feedback.Service.Interfaces;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Feedback.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Login/[Action]")]
    [ValidateModel]
    public class LoginController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IUserService _userService;

        public LoginController(IConfiguration configuration, IUserService userService)
        {
            _userService = userService;
            _configuration = configuration;
        }

    }
}