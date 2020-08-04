using System;
using System.ComponentModel.DataAnnotations;

namespace FamilyHealth.Data.DataObjects
{
    public class User
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string EmailId { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
    }
}
