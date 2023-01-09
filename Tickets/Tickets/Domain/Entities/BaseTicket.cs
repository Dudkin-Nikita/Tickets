namespace Tickets.Domain.Entities
{
    public class BaseTicket
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Performer { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public string Place { get; set; } = string.Empty;
        public int TicketsCount { get; set; }
        public TicketTypes TicketType { get; set; }

    }
}
