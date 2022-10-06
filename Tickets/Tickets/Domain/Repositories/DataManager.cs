using Tickets.Domain.Repositories.Abstract;

namespace Tickets.Domain.Repositories
{
    public class DataManager
    {
        public IClassicTicketsRepository ClassicTickets { get; set; }
        public IOpenAirTicketsRepository OpenAirTickets { get; set; }
        public IPartyTicketsRepository PartyTickets { get; set; }
        public DataManager(IClassicTicketsRepository classicTickets, IOpenAirTicketsRepository openAirTickets, IPartyTicketsRepository partyTickets)
        {
            ClassicTickets = classicTickets;
            OpenAirTickets = openAirTickets;
            PartyTickets = partyTickets;
        }
    }
}
