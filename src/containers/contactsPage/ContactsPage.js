import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [duplicateCheck, setDuplicateCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!duplicateCheck) {
      props.addContact(currentName, currentPhone, currentEmail);
      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
    } else {
      alert('Contact already exists. Please use a different name.')
    }
  };

  useEffect(() => {
    const isDuplicateCheck = props.contacts.some(
      (contact) => 
        contact.name.trim().toLowerCase() === 
        currentName.trim().toLowerCase()
    );
    setDuplicateCheck(isDuplicateCheck);
  }, [currentName, props.contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={currentName}
          setName={setCurrentName}
          phone={currentPhone}
          setPhone={setCurrentPhone}
          email={currentEmail}
          setEmail={setCurrentEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={props.contacts} />
      </section>
    </div>
  );
};

export default ContactsPage;
