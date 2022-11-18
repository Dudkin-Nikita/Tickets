import React, { Component, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TicketFilter from './components/TicketFilter';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import './styles/App.css'

function App() {
    const [tickets, setTickets] = useState([
        { id: 1, title: "Ticket", body: "Party" },
        { id: 2, title: "Ticket 2", body: "Classic" },
        { id: 3, title: "Ticket 3", body: "OpenAir"}
    ])

    const [sortedTickets, setSortedTickets] = useState(tickets)

    const [filter, setFilter] = useState({sort: '', query: ''})

    const createTicket = (newTicket) => {
        setTickets([...tickets, newTicket])
        if (newTicket.body === filter.sort) {
            setSortedTickets([...sortedTickets, newTicket])
        }
    }

    const removeTicket = (ticket) => {
        setTickets(tickets.filter(t => t.id !== ticket.id))
        setSortedTickets(sortedTickets.filter(t => t.id !== ticket.id))
    }

    const sortTickets = (sort) => {
        setFilter({ ...filter, sort: sort })
        if (sort !== "All") {
            setSortedTickets([...tickets].filter(t => t.body === sort))
        } else {
            setSortedTickets(tickets)
        } 
    }

    const sortedAndSearchedTickets = useMemo(() => {
        return sortedTickets.filter(ticket => ticket.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedTickets])

    return (
        <div className="App">
            <TicketForm create={createTicket} />
            <hr />
            <TicketFilter filter={filter} setFilter={setFilter} sortTickets={sortTickets} />
            <TicketList remove={removeTicket} tickets={sortedAndSearchedTickets} title="List of tickets" />
        </div>
    )
}

export default App