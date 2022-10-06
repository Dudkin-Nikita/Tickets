using Tickets.Domain.Entities;

namespace Tickets.Domain.Repositories.Abstract
{
    public interface IPartyTicketsRepository
    {
        IQueryable<PartyTicket> GetPartyTickets();
        PartyTicket GetPartyTicketById(int id);
        void AddPartyTicket(PartyTicket entity);
        void UpdatePartyTicket(PartyTicket entity);
        void DeletePartyTicket(int id);
    }
}
