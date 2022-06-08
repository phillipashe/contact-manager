import React from 'react';
import ContactCard from './ContactCard';

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
    <div className="ui celled list">{renderContactList}</div>
  );
};

export default ContactList;