import React from "react";

import { ContactPicker } from '../../components/contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  defaultListValue
}) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id='title'
          type='text'
          placeholder='Appointment Type'
          required
        />
        <input 
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
          id='date'
          type='date'
          placeholder='Date'
          required
        />
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id='time'
          type='time'
          placeholder='Time'
          required
        />

        <ContactPicker 
          contacts={contacts}
          value={contact}
          defaultListValue={defaultListValue}
          onChange={(e) => setContact(e.target.value)}
          name='contactList'
        />
        <button type='submit'>Add Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;