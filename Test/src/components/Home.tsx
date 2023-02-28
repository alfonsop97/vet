import React from 'react';
import { useState } from 'react';
import './Styles/Home.css';
import Id from './Id';
import History from './History';
const Home = () => {

    const [tab, setTab] = useState("home");
    return (
        <>
        <nav className="home-container">
            <ul className='home-links'>
                <li className='home-item' onClick={() => setTab("id")}>ID Component</li>
            </ul>
            <ul className='home-links'>
                <li className='home-item' onClick={() => setTab("history")}>History Component</li>
            </ul>
        </nav>
            {tab === "home"}
            {tab === "history" && <History />}
            {tab === "id" && <Id />}
        </>
    );
};
    
export default Home;