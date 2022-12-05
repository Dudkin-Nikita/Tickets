import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TicketService from './API/TicketService';
import { useFetching } from './components/hooks/useFetching';
import { useTickets } from './components/hooks/useTickets';
import TicketFilter from './components/TicketFilter';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/loader/Loader';
import MyModal from './components/UI/modal/MyModal';
import './styles/App.css'

function App() {
    const [tickets, setTickets] = useState([
        //{ id: 1, title: "Ticket", body: "Party" },
        //{ id: 2, title: "Ticket 2", body: "Classic" },
        //{ id: 3, title: "Ticket 3", body: "OpenAir"}
    ])

    const [filter, setFilter] = useState({ sort: 'All', query: '' })
    const [modal, setModal] = useState(false)
    const [fetchTickets, isTicketsLoading, ticketError] = useFetching(async () => {
        const tickets = await TicketService.getAll()
        setTickets(tickets)
    })

    useEffect(() => {
        fetchTickets()
    }, [])


    const sortedAndSearchedTickets = useTickets(tickets, filter.sort, filter.query)

    const createTicket = (newTicket) => {
        setTickets([...tickets, newTicket])
        setModal(false)
    }

    const removeTicket = (ticket) => {
        setTickets(tickets.filter(t => t.id !== ticket.id))
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>Create ticket</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <TicketForm create={createTicket} />
            </MyModal>
            <hr />
            <TicketFilter filter={filter} setFilter={setFilter} />
            {ticketError &&
                <h1>{ticketError}</h1>
            }
            {isTicketsLoading
                ? <div className="loader"><Loader /></div>
                : <TicketList remove={removeTicket} tickets={sortedAndSearchedTickets} title="List of tickets" />
            }           
        </div>
    )
}

export default App