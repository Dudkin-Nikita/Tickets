import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css'

function App() {
    const [tickets, setTickets] = useState([
        { id: 1, title: "Ticket", body: "Party ticket" },
        { id: 2, title: "Ticket 2", body: "Classic ticket" },
        { id: 3, title: "Ticket 3", body: "OpenAir ticket"}
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const createTicket = (newTicket) => {
        setTickets([...tickets, newTicket])
    }

    const removeTicket = (ticket) => {
        setTickets(tickets.filter(t => t.id !== ticket.id))
    }

    const sortTickets = (sort) => {
        setSelectedSort(sort)
        setTickets([...tickets].sort((a, b) => a[sort].localeCompare(b[sort]))
    }

    return (
        <div className="App">
            <TicketForm create={createTicket} />
            <hr/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortTickets}
                    defaultValue='Sort'
                    options={[
                        { value: 'title', name: 'by name' },
                        {value: 'body', name: 'by description'}
                    ]}
                />
            </div>
            {tickets.length
                ? <TicketList remove={removeTicket} tickets={tickets} title="List of tickets" />
                : <h1>There is no tickets</h1>
            } 
        </div>
    )
}

export default App