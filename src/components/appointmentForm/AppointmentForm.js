import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({ contacts, name, setName, contact, setContact, date, setDate, time, setTime, handleSubmit
}) => {

  const changeName = (e) => {
    setName(e.target.value);
  }

  const changeDate = (e) => {
    setDate(e.target.value);
  }

  const changeTime = (e) => {
    setTime(e.target.value);
  }



  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type='text' value={name} placeholder="Name" required onChange={changeName}  />
      <input type='date' value={date} min={getTodayString()} placeholder="Date" required onChange={changeDate} />
      <input type='time' value={time} placeholder="Time" required onChange={changeTime} />
      <ContactPicker contacts={contacts} value={contact} onChange={(e) => setContact(e.target.value)} name={name} />
      <input type="submit" value='Submit' />

    </form>
    </>
  );
};
