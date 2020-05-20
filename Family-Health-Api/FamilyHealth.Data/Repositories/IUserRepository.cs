using FamilyHealth.Data.BusinessObjects;

namespace FamilyHealth.Data.Repositories
{
    public interface IUserRepository
    {
        User GetByUsername(string username);
    }
}
