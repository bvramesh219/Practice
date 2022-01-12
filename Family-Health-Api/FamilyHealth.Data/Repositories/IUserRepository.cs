using FamilyHealth.Data.DataObjects;

namespace FamilyHealth.Data.Repositories
{
    public interface IUserRepository
    {
        User GetByUsername(string username);
    }
}
