import React from 'react';
import ContactCard from './ContactCard';
import './ContactList.css';

const ContactList = (props) => {
  const deleteHandler = (key) => {
    props.removeContactHandler(key);
  }
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} deleteHandler={deleteHandler} key={contact.key}></ContactCard>
    )
  });
  return (
    <div className="list-head">
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;