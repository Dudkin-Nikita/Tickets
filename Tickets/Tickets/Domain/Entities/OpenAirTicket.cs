namespace Tickets.Domain.Entities
{
    public class OpenAirTicket : BaseTicket
    {
        public string Headliner { get; set; } = string.Empty;
        public string Route { get; set; } = string.Empty;
    }
}
