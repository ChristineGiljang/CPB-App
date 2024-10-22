import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar/sidebar';
import Calendar from './calendar/calendar';

function App() {

    const Home = () => <h2>Home</h2>;
    const Pomo = () => <h2>Pomo</h2>;
    const Budget = () => <h2>Budget</h2>;
    return(
       <Router>
        <div className='layout'>
                <Sidebar />
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Home />} /> 
                    <Route path='/calendar' element={<Calendar />} /> 
                    <Route path='/clock' element={<Pomo />} /> 
                    <Route path='/dollar' element={<Budget />} /> 
                </Routes>
            </div>
        </div>
        </Router>
    );
}

export default App
