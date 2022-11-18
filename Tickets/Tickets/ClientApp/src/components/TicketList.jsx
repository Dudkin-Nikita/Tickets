import React from 'react';
import BaseTicketItem from './BaseTicketItem';

const TicketList = ({ tickets, title, remove }) => {
    if (!tickets.length) {
        return (
            <h1>There is no tickets</h1>
        )
    }
    return (
        <div>
            <h1>{title}</h1>
            {tickets.map((ticket, index) =>
                <BaseTicketItem remove={remove} number={index + 1} ticket={ticket} key={ticket.id} />
            )}
        </div>
    )
}

export default TicketList