using Tickets.Domain.Entities;

namespace Tickets.Domain.Repositories.Abstract
{
    public interface IClassicTicketsRepository
    {
        IQueryable<ClassicTicket> GetClassicTickets();
        ClassicTicket GetClassicTicketById(int id);
        void AddClassicTicket(ClassicTicket entity);
        void UpdateClassicTicket(ClassicTicket entity);
        void DeleteClassicTicket(int id);

    }
}
