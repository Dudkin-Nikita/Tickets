import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TicketService from '../API/TicketService';
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/loader/Loader';

const TicketIdPage = () => {
    const params = useParams()
    const [ticket, setTicket] = useState({})

    const [fetchTicketById, isTicketLoading, ticketError] = useFetching(async (id) => {
        const response = await TicketService.getById(id)
        setTicket(response.data)
    })

    useEffect(() => {
        fetchTicketById(params.id)
    }, [])

    return (
        <div>
            <h1>Page of ticket with ID={params.id}</h1>
            {isTicketLoading
                ? <Loader />
                : <div>{ticket.id}. {ticket.title}</div>
            }
        </div>
    )
}

export default TicketIdPage