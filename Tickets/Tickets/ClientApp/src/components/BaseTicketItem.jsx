import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const BaseTicketItem = (props) => {
    const router = useNavigate()

    return (
        <div className="ticket">
            <div className="ticket__content">
                <strong>{props.ticket.id}. {props.ticket.title}</strong>
                <div>
                    {props.ticket.body}
                </div>
            </div>
            <div className="ticket__btns">
                <MyButton onClick={() => router(`/tickets/${props.ticket.id}`)}>Open</MyButton>
            </div>
            <div className="ticket__btns">
                <MyButton onClick={() => props.remove(props.ticket)}>Delete</MyButton>
            </div>
        </div>
    )
}

export default BaseTicketItem