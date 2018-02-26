using Feedback.Data.Interfaces;
using Feedback.Data;
using Feedback.Entity;
using Feedback.Entity.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;


namespace Feedback.Data.Logic
{
    public class UserRepository : Repository<Users>, IUserRepository
    {
        private readonly FeedbackContext _context;
        public UserRepository(FeedbackContext context) : base(context)
        {
            this._context = context;
        }

        public Users LoginUser(string username, string password)
        {
            return _context.Users.FirstOrDefault(x => x.UserName == username && x.Password == password);
        }
    }
}
