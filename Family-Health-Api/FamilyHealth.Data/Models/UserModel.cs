using System;
using System.ComponentModel.DataAnnotations;

namespace FamilyHealth.Data.Models
{
    public class UserBaseModel
    {
        public Guid Id { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string EmailId { get; set; }

        public string PhoneNumber { get; set; }
    }
    public class UserModel : UserBaseModel
    {
        public string Token { get; set; }
        public string AccountNumber { get; set; }
    }

    public class UserAuthenticationModel
    {
        public UserModel UserModel { get; set; }
    }
}
