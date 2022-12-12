import React from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import './styles/App.css'

function App() {
    return (
        <div>
            <Navbar />
            <AppRouter />
        </div>      
    )
}

export default App