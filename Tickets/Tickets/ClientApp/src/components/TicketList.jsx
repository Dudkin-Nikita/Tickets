import React from 'react';
import BaseTicketItem from './BaseTicketItem';
import {TransitionGroup, CSSTransition } from 'react-transition-group'

const TicketList = ({ tickets, title, remove }) => {
    if (!tickets.length) {
        return (
            <h1>There is no tickets</h1>
        )
    }
    return (
        <div>
            <h1>{title}</h1>
            <TransitionGroup>
                {tickets.map((ticket, index) =>
                    <CSSTransition
                        key={ticket.id}
                        timeout={500}
                        classNames='ticket'
                    >
                        <BaseTicketItem remove={remove} number={index + 1} ticket={ticket} />
                    </CSSTransition> 
                )}
            </TransitionGroup> 
        </div>
    )
}

export default TicketList