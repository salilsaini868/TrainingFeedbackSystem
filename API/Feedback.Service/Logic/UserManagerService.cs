using Feedback.Service.Interfaces;
using Feedback.Common.Enums;
using Feedback.Common.Extensions;
using Feedback.Entity;
using Feedback.ViewModel.User;
using System;
using System.Linq;
using Feedback.Data.Interfaces;
using Feedback.Common.CommonData;
using Feedback.Entity.Models;

namespace Feedback.Service.Logic
{
    public class UserManagerService : IUserService
    {
        #region Global Variables
        private readonly IUserRepository _userRepository;
        #endregion
        public UserManagerService(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }
        #region private members

        #endregion private members

        #region public methods

        public UserViewModel LoginUser(string username, string Password)
        {
            UserViewModel userView = null;
            var user = _userRepository.LoginUser(username, Password);
            if (user != null)
            {
                userView = new UserViewModel();
                userView.MapFromModel(user, "UserName;");
                userView.FullName = user.FirstName + " " + user.LastName;
            }
            return userView;
        }

        #endregion

    }
}
