using Microsoft.EntityFrameworkCore;
using PaintedProsthetics.Gallery.Models;

namespace PaintedProsthetics.Web.Api.Helpers
{
    public class ImagesContext : DbContext
    {
        public ImagesContext(DbContextOptions<ImagesContext> options) : base(options)
        {

        }

        public DbSet<Image> Images { get; set; }
    }
}
