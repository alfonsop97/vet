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
                        <li className='id-item'><strong>Pet Name: </strong>{petName}</li>
                        <li className='id-item'><strong>Member ID: </strong>{memberID}</li>
                        <li className='id-item'><strong>Plan Type: </strong>{planType}</li>
                        <li className='id-item'><strong>Status: </strong>{status}</li>
                    </ul>
                </div>
                <div>
                    <h2 className="id-bot">Pharmacy ID information </h2>
                </div>
                <div>
                        <ul className='id-links'>
                            <li><strong>Policy Holder Name: </strong>{policyHolderName}</li>
                            <li><strong>Relationship: </strong>{relationship}</li>
                            <li><strong>Pet DOB: </strong>{petDOB}</li>
                            <li><strong>BIN: </strong>{BIN}</li>
                            <li><strong>PCN: </strong>{PCN}</li>
                            <li><strong>GROUP: </strong>{group}</li>
                        </ul>
                </div>
            </div>
        </>
    );
};
export default Id;