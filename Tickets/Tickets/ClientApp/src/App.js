import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css'

function App() {
    const [tickets, setTickets] = useState([
        { id: 1, title: "Ticket", body: "Party" },
        { id: 2, title: "Ticket 2", body: "Classic" },
        { id: 3, title: "Ticket 3", body: "OpenAir"}
    ])

    const [sortedTickets, setSortedTickets] = useState(tickets)

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')


    const createTicket = (newTicket) => {
        setTickets([...tickets, newTicket])
        if (newTicket.body === selectedSort) {
            setSortedTickets([...sortedTickets, newTicket])
        }
    }

    const removeTicket = (ticket) => {
        setTickets(tickets.filter(t => t.id !== ticket.id))
        setSortedTickets(sortedTickets.filter(t => t.id !== ticket.id))
    }

    const sortTickets = (sort) => {
        setSelectedSort(sort)
        if (sort !== "All") {
            setSortedTickets([...tickets].filter(t => t.body === sort))
        } else {
            setSortedTickets(tickets)
        } 
    }

    return (
        <div className="App">
            <TicketForm create={createTicket} />
            <hr/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search"
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortTickets}
                    defaultValue='Sort'
                    options={[
                        { value: "All", name: "All" },
                        { value: "Classic", name: "Classic" },
                        { value: "Party", name: "Party" },
                        { value: "OpenAir", name: "OpenAir" }
                    ]}
                />
            </div>
            {sortedTickets.length
                ? <TicketList remove={removeTicket} tickets={sortedTickets} title="List of tickets" />
                : <h1>There is no tickets</h1>
            } 
        </div>
    )
}

export default App