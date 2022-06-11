import React from 'react';
import { useLocation } from 'react-router-dom';
const ContactDetails = (props) => {
  const location = new useLocation(); 
  const {user, name, email} = location.state;

  return (
    <div>
      <img src={user}></img>
      <h1 style={{"margin-top": '100px'}}>{name}</h1>
      <h2>{email}</h2>
    </div>
  );

}

export default ContactDetails;