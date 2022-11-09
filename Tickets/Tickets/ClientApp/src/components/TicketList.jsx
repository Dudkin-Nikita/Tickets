import React from 'react';
import BaseTicketItem from './BaseTicketItem';

const TicketList = ({tickets}) => {
    return (
        <div>
            <h1>List of tickets</h1>
            {tickets.map(ticket =>
                <BaseTicketItem ticket={ticket} key={ticket.id} />
            )}
        </div>
    )
}

export default TicketList