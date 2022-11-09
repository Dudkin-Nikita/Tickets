import React from 'react';

const BaseTicketItem = (props) => {
    return (
        <div className="ticket">
            <div className="ticket__content">
                <strong>{props.ticket.id}. {props.ticket.title}</strong>
                <div>
                    {props.ticket.body}
                </div>
            </div>
            <div className="ticket__btns">
                <button>Delete</button>
            </div>
        </div>
    )
}

export default BaseTicketItem