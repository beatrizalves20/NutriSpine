import React, { useState } from 'react';

function Appointment() {
    const [appointmentData, setAppointmentData] = useState({
        date: '',
        time: '',
    });

    const handleChange = (e) => {
        setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para agendar consulta
        console.log("Agendamento:", appointmentData);
    };

    return (
        <div>
            <h2>Agendar Consulta</h2>
            <form onSubmit={handleSubmit}>
                <label>Data:</label>
                <input type="date" name="date" onChange={handleChange} required />

                <label>Horário:</label>
                <input type="time" name="time" onChange={handleChange} required />

                <button type="submit">Agendar</button>
            </form>
        </div>
    );
}

export default Appointment;