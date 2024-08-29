import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

   if (duplicate === false) {
    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
   } else {
    alert('Duplicate name, please try a new name');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    const isDuplicate = contacts.some(contact => contact.name === name);
    setDuplicate(isDuplicate);
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={contacts} />
      </section>
    </div>
  );
};
