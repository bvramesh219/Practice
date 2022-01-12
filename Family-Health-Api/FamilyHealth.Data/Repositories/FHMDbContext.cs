using System;
using System.Data.Entity;
using FamilyHealth.Data.DataObjects;

namespace FamilyHealth.Data.Repositories
{
    public class FHMDbContext: DbContext
    {
        public DbSet<User> Users { get; set; }
    }
}
