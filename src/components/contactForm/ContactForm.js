import React from "react";

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => 
  {
    const onNameChange = (e) => {
      setName(e.target.value);
    };

    const onPhoneChange = (e) => {
      setPhone(e.target.value);
    };

    const onEmailChange = (e) => {
      setEmail(e.target.value);
    };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Name" value={name} required onChange={onNameChange} />
        <input type='tel' placeholder="Phone" value={phone} required onChange={onPhoneChange}/>
        <input type='email' placeholder="Email" value={email} required onChange={onEmailChange} />
        <input type="submit" value='Submit' />
      </form>
    </>
  );
};

