using Feedback.Common.Enums;
using Feedback.ViewModel.User;
using System;

namespace Feedback.Service.Interfaces
{
    public interface IUserService
    {
        UserViewModel LoginUser(string Email, string Password);

    }
}
