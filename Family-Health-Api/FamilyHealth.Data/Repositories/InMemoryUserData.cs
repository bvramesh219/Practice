using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FamilyHealth.Data.BusinessObjects;

namespace FamilyHealth.Data.Repositories
{
    public class InMemoryUserData : IUserRepository
    {
        List<User> users;
        public InMemoryUserData()
        {
            users = new List<User>();
            users.Add(new User(Guid.NewGuid()));
        }
        User IUserRepository.GetByUsername(string username)
        {
            return users.First();
        }
    }
}
