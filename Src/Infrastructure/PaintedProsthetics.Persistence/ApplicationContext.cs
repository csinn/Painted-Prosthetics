using Microsoft.EntityFrameworkCore;

namespace PaintedProsthetics.Persistence
{
    public class ApplicationContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }


        public DbSet<Amputee> Amputees { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<ProstheticRequest> ProstheticRequests { get; set; }
        public DbSet<Artwork> Artwork { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Portfolio> Portfolios { get; set; }
        public DbSet<Donation> Donations { get; set; }
        public DbSet<ArtistRequest> ArtistRequests { get; set; }
        public DbSet<Feedback> Feedback { get; set; }

    }
}
