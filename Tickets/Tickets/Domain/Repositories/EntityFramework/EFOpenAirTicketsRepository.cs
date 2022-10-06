using Microsoft.EntityFrameworkCore;
using Tickets.Domain.Entities;
using Tickets.Domain.Repositories.Abstract;

namespace Tickets.Domain.Repositories.EntityFramework
{
    public class EFOpenAirTicketsRepository : IOpenAirTicketsRepository
    {
        private readonly AppDbContext context;
        public EFOpenAirTicketsRepository(AppDbContext context)
        {
            this.context = context;
        }
        public IQueryable<OpenAirTicket> GetOpenAirTickets()
        {
            return context.OpenAirTickets;
        }
        public OpenAirTicket GetOpenAirTicketById(int id)
        {
            return context.OpenAirTickets.FirstOrDefault(x => x.Id == id);
        }
        public void AddOpenAirTicket(OpenAirTicket entity)
        {
            context.OpenAirTickets.Add(entity);
            context.SaveChanges();
        }
        public void UpdateOpenAirTicket(OpenAirTicket entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();
        }
        public void DeleteOpenAirTicket(int id)
        {
            OpenAirTicket ticket = context.OpenAirTickets.FirstOrDefault(x => x.Id == id);
            if (ticket != null)
            {
                context.OpenAirTickets.Remove(ticket);
                context.SaveChanges();
            }
        }
    }
}
