using Tickets.Domain.Entities;

namespace Tickets.Domain.Repositories.Abstract
{
    public interface IRepository<T>
    {
        IQueryable<T> GetTickets();
        T? GetTicketById(int id);
        void AddTicket(T entity);
        void UpdateTicket(T entity);
        void DeleteTicket(int id);

    }
}
