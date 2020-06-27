using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FamilyHealth.Data.BusinessObjects
{
    public interface IUser
    {
        Guid UserId { get; }
    }

    [Serializable]
    public class User : IUser
    {
        public Guid UserId { get; protected set; }
        public User(Guid userId)
        {
            this.UserId = userId;
        }
    }
}
