namespace Tickets.Domain.Entities
{
    public class ClassicTicket : BaseTicket
    {
        public string VoiceType { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Composer { get; set; } = string.Empty;
    }
}
