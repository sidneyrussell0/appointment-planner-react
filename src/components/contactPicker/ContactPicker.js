import React from "react";

export const ContactPicker = (props) => {
  
  const names = props.contacts.map((contact) => {
    return <option key={contact.name} value={contact.name}>{contact.name}</option>
  });

  return (
    <form>
      <select id='contactList' onChange={props.handleChange}required>
        <option value={props.defaultListValue}>{props.defaultListValue}</option>
        {names}
      </select> 
    </form>
  );
};

export default ContactPicker;