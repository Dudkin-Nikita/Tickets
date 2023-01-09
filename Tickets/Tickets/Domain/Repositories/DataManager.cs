using Tickets.Domain.Entities;
using Tickets.Domain.Repositories.Abstract;

namespace Tickets.Domain.Repositories
{
    public class DataManager
    {
        public IRepository<ClassicTicket> ClassicTickets { get; set; }
        public IRepository<OpenAirTicket> OpenAirTickets { get; set; }
        public IRepository<PartyTicket> PartyTickets { get; set; }
        public DataManager(IRepository<ClassicTicket> classicTickets, IRepository<OpenAirTicket> openAirTickets, IRepository<PartyTicket> partyTickets)
        {
            ClassicTickets = classicTickets;
            OpenAirTickets = openAirTickets;
            PartyTickets = partyTickets;
        }
    }
}
