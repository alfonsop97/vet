import { useState } from 'react';
import './Styles/Home.css';
import Id from './Id';
import History from './Appointments';
import Appointments from './Appointments';
const Home = () => {

    const [tab, setTab] = useState("id");
    const [navLeft, setNavLeft] = useState("id-active");
    const [navRight, setNavRight] = useState("appointment-active")

    //information would be sent from db into component
    return (
        <>
        <nav className="home-container">
            <ul className='home-links'>
               <li className={`home-item ${navLeft}`}
                onClick={() => {
                    setTab("id"); 
                    setNavLeft("id-active");
                    setNavRight("")}
                    }>ID Card</li>

            </ul>
            <ul className='home-links'>
                <li className={`home-item ${navRight}`}
                onClick={() => {
                    setTab("appointments");
                    setNavLeft("");
                    setNavRight("appointments-active")}
                    }>Appointments</li>
            </ul>
        </nav>
        
            {tab === "home"}
            {tab === "appointments" && <Appointments appointmentIsActive={"true"}/>}
            {tab === "id" && <Id  
                petName={"Odesza"}
                memberID={45435643}
                planType={"something"}
                status={"active"}
                policyHolderName={"Alfonso"}
                relationship={"Dad"}
                petDOB={"09/05/22"}
                BIN={323}
                PCN={3121}
                group={"A"}
            />}
        </>
    );
};
    
export default Home;