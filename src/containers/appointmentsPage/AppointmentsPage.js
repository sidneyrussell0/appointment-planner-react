import React, { useState, useEffect } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContact, setCurrentContact] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [alert, setAlert] = useState('');
  const defaultListValue = 'No contact selected';

  const handleSubmit = (e) => {
    e.preventDefault();

    const duplicateAppointment = props.appointments.some(
      (appointmentItem) =>
        appointmentItem.date === currentDate && appointmentItem.time === currentTime
    );

    if (!duplicateAppointment) {
      props.addAppointment(currentTitle, currentContact, currentDate, currentTime);
      setCurrentTitle('');
      setCurrentDate('');
      setCurrentTime('');
      document.getElementById('contactList').value = defaultListValue;
      setAlert('');
    } else {
      window.alert('Appointment is already booked.');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={props.contacts}
          title={currentTitle}
          setTitle={(value) => setCurrentTitle(value)}
          contact={currentContact}
          setContact={(value) => setCurrentContact(value)}
          date={currentDate}
          setDate={(value) => setCurrentDate(value)}
          time={currentTime}
          setTime={(value) => setCurrentTime(value)}
          handleSubmit={handleSubmit}
          defaultListValue={defaultListValue}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList object={props.appointments} />
      </section>
    </div>
  );
};