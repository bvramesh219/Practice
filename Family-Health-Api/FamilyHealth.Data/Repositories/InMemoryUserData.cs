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

        public InMemoryUserData()
        {

        }
        User IUserRepository.GetByUsername(string username)
        {
            throw new NotImplementedException();
        }
    }
}
