import React from 'react';
import BaseTicketItem from './BaseTicketItem';

const TicketList = ({tickets, title, remove}) => {
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