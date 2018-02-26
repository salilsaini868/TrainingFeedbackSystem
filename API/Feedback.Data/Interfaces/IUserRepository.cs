using Feedback.Data.Interfaces;
using Feedback.Entity.Models;

namespace Feedback.Data.Interfaces
{
    public interface IUserRepository: IRepository<Users>
    {
        Users LoginUser(string username, string password);
    }
}
