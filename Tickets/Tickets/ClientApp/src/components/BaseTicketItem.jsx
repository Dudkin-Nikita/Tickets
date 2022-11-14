import React from 'react';
import MyButton from './UI/button/MyButton';

const BaseTicketItem = (props) => {
    return (
        <div className="ticket">
            <div className="ticket__content">
                <strong>{props.number}. {props.ticket.title}</strong>
                <div>
                    {props.ticket.body}
                </div>
            </div>
            <div className="ticket__btns">
                <MyButton onClick={() => props.remove(props.ticket)}>Delete</MyButton>
            </div>
        </div>
    )
}

export default BaseTicketItem