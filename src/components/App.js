import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Router>
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />}>
          </Route>
          <Route path="/" element={<ContactList contacts={contacts} removeContactHandler={removeContactHandler} />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
