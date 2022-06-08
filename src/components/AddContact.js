import React from 'react';

class AddContact extends React.Component {
  state = {
    name: "",
    email: ""
  }

  // need to use arrow function here for this to refer to class
  // for regular functions, method invocation binds this to function
  // whereas simple invocation binds this to global object
  // arrow functions do not define their own execution context - no change to this
  add = (e) => {
    // prevents page refresh
    e.preventDefault();
    if (!this.isValidEmail()) {
      alert("Please enter a valid email.")
      return;
    }
    if (!this.state.name || !this.state.email) {
      alert("Please fill out all the fields.")
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  }

  isValidEmail() {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email));
  }

  render() {
    return (<div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={this.add}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input>
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div >)
  }
}

export default AddContact;