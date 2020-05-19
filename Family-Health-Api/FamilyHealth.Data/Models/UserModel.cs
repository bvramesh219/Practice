using System;
using System.ComponentModel.DataAnnotations;

namespace FamilyHealth.Data.Models
{
    public class UserBaseModel
    {
        public Guid Id { get; set; }
        [Required]
        public string Username { get; set; }
        public string Name { get; set; }
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
