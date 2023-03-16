import React from 'react';
import './Styles/Id.css';


type props = {
    petName: string,
    memberID: number,
    planType: String,
    status: String,
    policyHolderName: string,
    relationship: string,
    petDOB: string,
    BIN: number,
    PCN: number,
    group: string,
}

//const Header = ( {ownerName, petName}: props) 

const Id = ({
    petName,
    memberID,
    planType,
    status,
    policyHolderName,
    relationship,
    petDOB,
    BIN,
    PCN,
    group
}:props ) => {
    return (
        <>
            <div className="id-container">
                <div>
                    <h1 className="id-top">Fonzo's Veterinary</h1>
                </div>
                <div>
                    <h2>Pet Insurance Card</h2>
                </div>
                <div>
                    <ul className='id-links'>
                        <li className='id-item'>Pet Name: {petName}</li>
                        <li className='id-item'>Member ID: {memberID}</li>
                        <li className='id-item'>Plan Type: {planType}</li>
                        <li className='id-item'>Status: {status}</li>
                    </ul>
                </div>
                <div>
                    <h2 className="id-bot">Pharmacy ID information </h2>
                </div>
                <div>
                        <ul className='id-links'>
                            <li>Policy Holder Name: {policyHolderName}</li>
                            <li>Relationship: {relationship}</li>
                            <li>Pet DOB: {petDOB}</li>
                            <li>BIN: {BIN}</li>
                            <li>PCN: {PCN}</li>
                            <li>GROUP: {group}</li>
                        </ul>
                </div>
            </div>
        </>
    );
};
export default Id;