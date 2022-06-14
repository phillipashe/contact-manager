import React from 'react';
import { useLocation } from 'react-router-dom';
import './ContactDetails.css';

const ContactDetails = () => {
  const location = new useLocation();
  const { user, name, email } = location.state;

  return (
    <div className="ui card centered details-card">
      <div className="image">
        <img src={user}></img>
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">{email}</div>
      </div>
    </div>
  );

}

export default ContactDetails;