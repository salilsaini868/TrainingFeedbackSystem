using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Feedback.Entity.Models
{
    public partial class Users : BaseEntity
    {

        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [Required, MaxLength(50)]
        public string UserName { get; set; }

        [Required, MaxLength(50)]
        public string Password { get; set; }

        [Required, MaxLength(50)]
        public string Email { get; set; }

        [Required, MaxLength(50)]
        public string FirstName { get; set; }

        [MaxLength(50)]
        public string LastName { get; set; }
    }
}
