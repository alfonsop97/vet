import './Styles/Appointments.css';

//GraphQL function would return appointments object
//appointments would have 
//date and time
//appointment type
//client name
//and a notes string
/*looks into active appointments 

if(appointments) {
    display appointments
} else {
    display no appointments
}
*/

 var appointment = {
    active: "true",
    date: "06/04/2023",
    time: "5:00pm",
    type: "General",
    name: "Odesza",
    note: "Allergic to bacon treats"
 }

type props = {
    appointmentIsActive: string
 }

const Appointments = ({appointmentIsActive}: props) => {
    return (
        <>
        <p>{appointment.note}</p>
        </>
    );
};
export default Appointments;