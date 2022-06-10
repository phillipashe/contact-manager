import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
import './ContactList.css';

const ContactList = (props) => {
  const deleteHandler = (key) => {
    props.deleteModalHandler(key, true);
  }
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} deleteHandler={deleteHandler} key={contact.key}></ContactCard>
    )
  });
  return (
    <div className="main">
      <div className="list-head">
        <h2>Contact List
          <Link to="/add">
            <button className="ui button green right add-button">Add</button>
          </Link>
        </h2>
        <div className="ui celled list">{renderContactList}</div>
      </div>
    </div>
  );
};

export default ContactList;