import React, { Component, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TicketFilter from './components/TicketFilter';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/modal/MyModal';
import './styles/App.css'

function App() {
    const [tickets, setTickets] = useState([
        { id: 1, title: "Ticket", body: "Party" },
        { id: 2, title: "Ticket 2", body: "Classic" },
        { id: 3, title: "Ticket 3", body: "OpenAir"}
    ])

    const [filter, setFilter] = useState({ sort: 'All', query: '' })
    const [modal, setModal] = useState(false)

    const createTicket = (newTicket) => {
        setTickets([...tickets, newTicket])
        setModal(false)
    }

    const removeTicket = (ticket) => {
        setTickets(tickets.filter(t => t.id !== ticket.id))
    }

    const sortedTickets = useMemo(() => {
        if (filter.sort !== 'All') {
            return ([...tickets].filter(t => t.body === filter.sort))
        } 
        return tickets
    }, [filter.sort, tickets])

    const sortedAndSearchedTickets = useMemo(() => {
        return sortedTickets.filter(ticket => ticket.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedTickets])

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>Create ticket</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <TicketForm create={createTicket} />
            </MyModal>
            <hr />
            <TicketFilter filter={filter} setFilter={setFilter} />
            <TicketList remove={removeTicket} tickets={sortedAndSearchedTickets} title="List of tickets" />
        </div>
    )
}

export default App