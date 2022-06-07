import './App.css';
import React from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
  const contacts = [{
    id: 1,
    name: 'Flipper',
    email: 'testing@test.com'
  },
  {
    id: 2,
    name: "bert",
    email: "bert@bertmail.com"
  }
]
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
