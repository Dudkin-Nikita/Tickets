import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import TicketIdPage from '../pages/TicketIdPage';
import Tickets from '../pages/Tickets';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about' element={<About />} />
            <Route exact path='/tickets' element={<Tickets />} />
            <Route exact path='/tickets/:id' element={<TicketIdPage />} />
            {/*<Route path='/map' element={<Map />} />*/}
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter