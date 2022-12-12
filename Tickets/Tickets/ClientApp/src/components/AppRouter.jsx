import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Tickets from '../pages/Tickets';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/tickets' element={<Tickets />} />
            {/*<Route path='/map' element={<Map />} />*/}
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter