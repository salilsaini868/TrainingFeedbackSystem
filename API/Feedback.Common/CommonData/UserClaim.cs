using System;

namespace Feedback.Common.CommonData
{
    public class UserClaim
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public string Role { get; set; }

        public Guid UserId { get; set; }

        public int RoleId { get; set; }
    }
}
