import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { uuid } from "uuidv4";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ModalWrapper from "./ModalWrapper";
import ContactDetails from "./ContactDetails";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedForDelete, setSelectedForDelete] = useState("");

  const addContactHandler = (contact) => {
    setContacts([...contacts, { key: uuid(), ...contact }]);
  };

  const deleteModalHandler = (key) => {
    setSelectedForDelete(key);
    console.log(selectedForDelete);
    setModalOpen(true);
  }

  const removeContactHandler = (key) => {
    setModalOpen(false);
    if (key) {
      const newContacts = contacts.filter(c => c.key !== key);
      setContacts([...newContacts]);
    }
    setSelectedForDelete("");
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

      <ModalWrapper isOpen={modalOpen} id={selectedForDelete} removeContactHandler={removeContactHandler} />
      <Header />
      <Router basename='contact-manager'>
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />}>
          </Route>
          <Route path="/" element={<ContactList contacts={contacts} deleteModalHandler={deleteModalHandler} />}>
          </Route>
          <Route path="/details/:id" element={<ContactDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
