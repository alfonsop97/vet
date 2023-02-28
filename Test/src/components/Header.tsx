import React from 'react';
import './Styles/Header.css';

type props = {
    ownerName: string,
    petName: String,
}

const Header = ( {ownerName, petName}: props) => {
    return (
        <>
        <nav className="header"> 
        <h1>{ownerName}</h1>
        <h1>Fonzo's Veterinary</h1>
            <ul className="header-links">
                <li className="header-item"><a>Notifications</a></li>
                <li className="header-item"><a>Options</a></li>
            </ul>
        </nav>
        <nav className='header'>
        <p>{petName}</p>
        </nav>
        <nav className='header-2 header'>
        <p>Profile Image</p>
        </nav>
        </>
    );
};

export default Header;