using Microsoft.EntityFrameworkCore;
using Tickets.Domain.Entities;
using Tickets.Domain.Repositories.Abstract;

namespace Tickets.Domain.Repositories.EntityFramework
{
    public class EFClassicTicketsRepository : IClassicTicketsRepository
    {
        private readonly AppDbContext context;
        public EFClassicTicketsRepository(AppDbContext context)
        {
            this.context = context;
        }
        public IQueryable<ClassicTicket> GetClassicTickets()
        {
            return context.ClassicTickets;
        }
        public ClassicTicket GetClassicTicketById(int id)
        {
            return context.ClassicTickets.FirstOrDefault(x => x.Id == id);
        }
        public void AddClassicTicket(ClassicTicket entity)
        {
            context.ClassicTickets.Add(entity);
            context.SaveChanges();
        }
        public void UpdateClassicTicket(ClassicTicket entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();
        }
        public void DeleteClassicTicket(int id)
        {
            ClassicTicket ticket = context.ClassicTickets.FirstOrDefault(x => x.Id == id);
            if (ticket != null)
            {
                context.ClassicTickets.Remove(ticket);
                context.SaveChanges();
            }
        }
    }
}
