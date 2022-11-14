import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const TicketForm = ({create}) => {
    const [ticket, setTicket] = useState({ title: '', body: '' })

    const addNewTicket = (e) => {
        e.preventDefault()
        const newTicket = {
            ...ticket, id: Date.now()
        }
        create(newTicket)
        setTicket({ title: '', body: '' })
    }

    return (
        <form>
            <MyInput
                value={ticket.title}
                onChange={e => setTicket({ ...ticket, title: e.target.value })}
                type="text"
                placeholder="Title">
            </MyInput>
            <MyInput
                value={ticket.body}
                onChange={e => setTicket({ ...ticket, body: e.target.value })}
                type="text"
                placeholder="Body">
            </MyInput>
            <MyButton onClick={addNewTicket}>Create ticket</MyButton>
        </form>
    )
}

export default TicketForm