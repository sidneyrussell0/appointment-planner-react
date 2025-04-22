import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='nameInput'
          type='text'
          placeholder='Name'
          required
        />
        <input 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id='phoneInput'
          type='tel'
          placeholder='Phone'
          pattern="(\d{3}[-\s])?\d{3}[-\s]?\d{4}"
          required
        />
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id='emailInput'
          type='email'
          placeholder='E-Mail'
          required
        />
        <button type='submit'>Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
