using Microsoft.EntityFrameworkCore;
using Tickets.Domain.Entities;
using Tickets.Domain.Repositories.Abstract;

namespace Tickets.Domain.Repositories.EntityFramework
{
    public class EFPartyTicketsRepository : IRepository<PartyTicket>
    {
        private readonly AppDbContext context;
        public EFPartyTicketsRepository(AppDbContext context)
        {
            this.context = context;
        }
        public IQueryable<PartyTicket> GetTickets()
        {
            return context.PartyTickets;
        }
        public PartyTicket? GetTicketById(int id)
        {
            return context.PartyTickets.FirstOrDefault(x => x.Id == id);
        }
        public void AddTicket(PartyTicket entity)
        {
            context.PartyTickets.Add(entity);
            context.SaveChanges();
        }
        public void UpdateTicket(PartyTicket entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();
        }
        public void DeleteTicket(int id)
        {
            PartyTicket? ticket = context.PartyTickets.FirstOrDefault(x => x.Id == id);
            if (ticket != null)
            {
                context.PartyTickets.Remove(ticket);
                context.SaveChanges();
            }
        }
    }
}
