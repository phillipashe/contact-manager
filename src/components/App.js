import './App.css';
import React, { useEffect, useState } from 'react';
import { uuid } from "uuidv4";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { key: uuid(), ...contact }]);
  };

  const removeContactHandler = (key) => {
    const newContacts = contacts.filter(c => c.key !== key);
    setContacts([...newContacts]);
  }

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts && storedContacts.length) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} removeContactHandler={removeContactHandler} />
    </div>
  );
}

export default App;
