using Microsoft.EntityFrameworkCore;
using Tickets.Domain.Entities;

namespace Tickets.Domain.Repositories
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<ClassicTicket> ClassicTickets { get; set; }
        public DbSet<OpenAirTicket> OpenAirTickets { get; set; }
        public DbSet<PartyTicket> PartyTickets { get; set; }

    }
}
