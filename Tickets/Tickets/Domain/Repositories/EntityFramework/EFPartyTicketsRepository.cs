using Microsoft.EntityFrameworkCore;
using Tickets.Domain.Entities;
using Tickets.Domain.Repositories.Abstract;

namespace Tickets.Domain.Repositories.EntityFramework
{
    public class EFPartyTicketsRepository : IPartyTicketsRepository
    {
        private readonly AppDbContext context;
        public EFPartyTicketsRepository(AppDbContext context)
        {
            this.context = context;
        }
        public IQueryable<PartyTicket> GetPartyTickets()
        {
            return context.PartyTickets;
        }
        public PartyTicket GetPartyTicketById(int id)
        {
            return context.PartyTickets.FirstOrDefault(x => x.Id == id);
        }
        public void AddPartyTicket(PartyTicket entity)
        {
            context.PartyTickets.Add(entity);
            context.SaveChanges();
        }
        public void UpdatePartyTicket(PartyTicket entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();
        }
        public void DeletePartyTicket(int id)
        {
            PartyTicket ticket = context.PartyTickets.FirstOrDefault(x => x.Id == id);
            if (ticket != null)
            {
                context.PartyTickets.Remove(ticket);
                context.SaveChanges();
            }
        }
    }
}
