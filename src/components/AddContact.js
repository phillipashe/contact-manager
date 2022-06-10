import React, { useState } from 'react';

// class AddContact extends React.Component {
const AddContact = (props) => {
  // state = {
  //   name: "",
  //   email: ""
  // }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // need to use arrow function here for this to refer to class
  // for regular functions, method invocation binds this to function
  // whereas simple invocation binds this to global object
  // arrow functions do not define their own execution context - no change to this
  const add = (e) => {
    // prevents page refresh
    e.preventDefault();
    if (!isValidEmail()) {
      alert("Please enter a valid email.")
      return;
    }
    if (!name || !email) {
      alert("Please fill out all the fields.")
      return;
    }
    props.addContactHandler({name, email});
    setName("");
    setEmail("");
  }

  const isValidEmail = () => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
  }

  return (<div className="ui main">
    <h2>Add Contact</h2>
    <form className="ui form" onSubmit={add}>
      <div className="field">
        <label>Name</label>
        <input type="text" name="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div className="field">
        <label>Email</label>
        <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <button className="ui button blue">Add</button>
    </form>
  </div >)
}

export default AddContact;