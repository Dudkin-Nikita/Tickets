import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TicketList from './components/TicketList';
import './styles/App.css'

function App() {
    const [tickets, setTickets] = useState([
        { id: 1, title: "Ticket", body: "Party ticket" },
        { id: 2, title: "Ticket 2", body: "Classic ticket" },
        { id: 3, title: "Ticket 3", body: "OpenAir ticket"}
    ])
    return (
        <div className="App">
            <TicketList tickets={tickets} />
        </div>
    )
}

export default App