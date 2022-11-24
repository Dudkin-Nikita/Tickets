import { useMemo } from 'react';

export const useSortedTickets = (tickets, sort) => {
    const sortedTickets = useMemo(() => {
        if (sort !== 'All') {
            return ([...tickets].filter(t => t.body === sort))
        }
        return tickets
    }, [sort, tickets])

    return sortedTickets
}

export const useTickets = (tickets, sort, query) => {
    const sortedTickets = useSortedTickets(tickets, sort)
    const sortedAndSearchedTickets = useMemo(() => {
        return sortedTickets.filter(ticket => ticket.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedTickets])

    return sortedAndSearchedTickets
}