using Tickets.Domain.Entities;

namespace Tickets.Domain.Repositories.Abstract
{
    public interface IOpenAirTicketsRepository
    {
        IQueryable<OpenAirTicket> GetOpenAirTickets();
        OpenAirTicket GetOpenAirTicketById(int id);
        void AddOpenAirTicket(OpenAirTicket entity);
        void UpdateOpenAirTicket(OpenAirTicket entity);
        void DeleteOpenAirTicket(int id);
    }
}
